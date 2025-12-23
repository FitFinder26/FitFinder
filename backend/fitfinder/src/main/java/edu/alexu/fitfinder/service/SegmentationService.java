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
    webClient
        .post()
        .uri("/api/v1/job/segment/")
        .contentType(MediaType.APPLICATION_FORM_URLENCODED)
        .body(
            BodyInserters.fromFormData("job_id", jobId)
                .with("image_url", imageUrl)
                .with("callback_url", forwardingUrl + "/segmentation/callback"))
        .exchangeToMono(response -> Mono.just(response.statusCode()))
        .block();
    System.out.println("Image is uploaded successfully to hugging face");

    // return job id and image url to the client
    Map<String, String> response = new HashMap<>();
    response.put("job_id", jobId);
    return response;
  }

  private void validatePointsAndBoxes(int[][] posPoints, int[][] negPoints, int[][] boxes)
      throws InvalidInputException {
    if ((negPoints == null || negPoints.length == 0)
        && (posPoints == null || posPoints.length == 0)) {
      throw new InvalidInputException("Pos points or neg points should be given");
    }

    boolean isNegPointsInValid =
        negPoints != null && negPoints.length != 0 && negPoints[0].length != 2;
    boolean isPosPointsInValid =
        posPoints != null && posPoints.length != 0 && posPoints[0].length != 2;

    if (isNegPointsInValid || isPosPointsInValid) {
      throw new InvalidInputException("Pos points and neg points should be of shape (N,2)");
    }

    if (boxes != null && boxes.length != 0 && boxes[0].length != 4) {
      throw new InvalidInputException("Boxes should be of shape (N,4)");
    }
  }

  public void Resegment(String sessionId, ResegmentImageDTO resegmentInfo) {
    // Get websocket session related to this id
    WebSocketSession session = MyWebSocketHandler.sessions.get(sessionId);
    if (session == null) throw new SocketException("WebSocket not connected");

    // Validate job_id
    try {
      resegmentInfo.setImage_url(
          cloudinary
              .api()
              .resource(resegmentInfo.getJob_id(), ObjectUtils.emptyMap())
              .get("secure_url")
              .toString());
    } catch (Exception e) {
      throw new InvalidInputException("There is no image associated with job Id");
    }
    System.out.println(resegmentInfo.getImage_url());

    // Validate points and boxes
    validatePointsAndBoxes(
        resegmentInfo.getPos_points(), resegmentInfo.getNeg_points(), resegmentInfo.getBoxes());

    // Refactor dimension for null and empty inputs
    if (resegmentInfo.getNeg_points() == null) resegmentInfo.setNeg_points(new int[0][0]);
    if (resegmentInfo.getPos_points() == null) resegmentInfo.setPos_points(new int[0][0]);
    if (resegmentInfo.getBoxes() != null && resegmentInfo.getBoxes().length == 0)
      resegmentInfo.setBoxes(null);

    // register this job with the session
    System.out.println("SessionId is correctly connected with Websocket!");
    jobRegistry.registerJob(resegmentInfo.getJob_id(), session);

    resegmentInfo.setCallback_url(forwardingUrl + "/segmentation/callback");
    String response =
        webClient
            .post()
            .uri("/api/v1/job/re-segment/")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(resegmentInfo)
            .retrieve()
            .bodyToMono(String.class)
            .block();
    System.out.println(response);
  }
}
