package edu.alexu.fitfinder.service;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.component.JobRegistry;
import edu.alexu.fitfinder.dto.ResegmentImageDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.exception.SocketException;
import edu.alexu.fitfinder.handler.MyWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.socket.WebSocketSession;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class SegmentationService {
  @Value("${cloudinary.url}")
  private Cloudinary cloudinary;

  @Value("${forwarding.url}")
  private String forwardingUrl;

  private final WebClient webClient;
  @Autowired JobRegistry jobRegistry;

  public SegmentationService() {
    this.webClient = WebClient.builder().baseUrl("https://fitfinder-ai-service.hf.space").build();
  }

  public Map<String, String> UploadImageAndSegment(MultipartFile image, String sessionId)
      throws IOException, SocketException, Exception {

    // Get websocket session related to this session id
    WebSocketSession session = MyWebSocketHandler.sessions.get(sessionId);
    if (session == null) throw new SocketException("WebSocket not connected");

    // create unique job id and upload it to cloudinary service
    String jobId = UUID.randomUUID().toString(); // 128-bit collision free random string
    var params = ObjectUtils.asMap("public_id", jobId, "overwrite", true);
    var uploadResult = cloudinary.uploader().upload(image.getBytes(), params);
    String imageUrl = uploadResult.get("secure_url").toString();

    System.out.println("Image url :" + imageUrl);
    // register this job with the session
    jobRegistry.registerJob(jobId, session);

    // send the image to the AI service for segmentation
    HttpStatusCode status =
        webClient
            .post()
            .uri("/api/v1/job/segment/")
            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
            .body(
                BodyInserters.fromFormData("job_id", jobId)
                    .with("image_url", imageUrl)
                    .with("callback_url", forwardingUrl + "/segment/callback"))
            .exchangeToMono(response -> Mono.just(response.statusCode()))
            .block();

    System.out.println(status);
    if (status == null || status.value() != 202) throw new Exception();
    System.out.println("Image is uploaded successfully to hugging face");

    // return job id and image url to the client
    Map<String, String> response = new HashMap<>();
    response.put("job_id", jobId);
    return response;
  }

  public void Resegment(String sessionId, ResegmentImageDTO resegmentInfo) {
    // Get websocket session related to this id
    WebSocketSession session = MyWebSocketHandler.sessions.get(sessionId);
    if (session == null) throw new SocketException("WebSocket not connected");

    String imageUrl = null;

    try {
      imageUrl =
          cloudinary
              .api()
              .resource(resegmentInfo.getJob_id(), ObjectUtils.emptyMap())
              .get("secure_url")
              .toString();
    } catch (Exception ignored) {
    }

    System.out.println(imageUrl);
    if (imageUrl == null)
      throw new InvalidInputException("There is no image associated with job Id");

    //    System.out.println("SessionId is correctly connected with Websocket!");
    //
    //    // register this job with the session
    //    jobRegistry.registerJob(jobId, session);
    //
    //    webClient
    //        .post()
    //        .uri("/api/v1/job/re-segment/")
    //        .contentType(MediaType.APPLICATION_FORM_URLENCODED)
    //        .body(
    //            BodyInserters.fromFormData("job_id", jobId)
    //                .with("image_url", imageUrl)
    //                .with("callback_url", forwardingUrl + "/segment/callback")
    //                .with("points", ""))
    //        .retrieve()
    //        .bodyToMono(String.class)
    //        .block();
  }
}
