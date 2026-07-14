package edu.alexu.fitfinder.service;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.component.JobRegistry;
import edu.alexu.fitfinder.exception.SocketException;
import edu.alexu.fitfinder.handler.MyWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.socket.WebSocketSession;
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

  public Map<String, String> uploadImage(MultipartFile image, String sessionId)
      throws IOException, SocketException {

    // Get websocket session related to this id
    WebSocketSession session = MyWebSocketHandler.sessions.get(sessionId);
    if (session == null) throw new SocketException("WebSocket not connected");

    System.out.println("SessionId is correctly connected with Websocket!");
    // create unique image id and upload it to cloudinary service
    String imageId = UUID.randomUUID().toString(); // 128-bit collision free random string
    var params = ObjectUtils.asMap("public_id", imageId, "overwrite", true);
    var uploadResult = cloudinary.uploader().upload(image.getBytes(), params);
    String imageUrl = uploadResult.get("secure_url").toString();

    System.out.println("Image is uploaded successfully to cloudinary!");
    System.out.println("Image url :" + imageUrl);
    // register this image with the session
    jobRegistry.registerJob(imageId, session);

    // send the image to the AI service for segmentation
    String response =
        webClient
            .post()
            .uri("/api/v1/job/segment/")
            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
            .body(
                BodyInserters.fromFormData("job_id", imageId)
                    .with("image_url", imageUrl)
                    .with("callback_url", forwardingUrl + "/segment/callback"))
            .retrieve()
            .bodyToMono(String.class)
            .block();

    System.out.println("Image is uploaded successfully to hugging face");
    System.out.println("Hugging face response : " + response);
    // return job id to the client
    Map<String, String> jobId = new HashMap<>();
    jobId.put("job_id", imageId);
    return jobId;
  }
}
