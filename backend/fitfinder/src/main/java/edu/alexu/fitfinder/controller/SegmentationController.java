package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.component.JobRegistry;
import edu.alexu.fitfinder.dto.ImageMasksDTO;
import edu.alexu.fitfinder.dto.ResegmentImageDTO;
import edu.alexu.fitfinder.service.SegmentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@RestController
public class SegmentationController {

  @Autowired SegmentationService segmentationService;
  @Autowired JobRegistry jobRegistry;

  @PostMapping("/segment/upload")
  public ResponseEntity<?> uploadImage(
      @RequestParam MultipartFile image, @RequestParam String sessionId)
      throws IOException, Exception {

    Map<String, String> response = segmentationService.UploadImageAndSegment(image, sessionId);
    return ResponseEntity.status(HttpStatus.OK).body(response);
  }

  @PostMapping("/resegment")
  public String resegment(
      @RequestParam String sessionId, @RequestBody ResegmentImageDTO resegmentInfo) {
    segmentationService.Resegment(sessionId, resegmentInfo);
    return "Successfully";
    //
    //    System.out.println("Hey from uploading image controller!");
    //    Map<String, String> response = segmentationService.uploadImage(image, sessionId);
    //    System.out.println("Image is sent to segmentation successfully!");
    //    return ResponseEntity.status(HttpStatus.OK).body(response);
  }

  @PutMapping("/segment/callback")
  public void segmentCallback(@RequestBody ImageMasksDTO masks) throws IOException {

    System.out.println("mask has been received from hugging face!");
    WebSocketSession session = jobRegistry.getSession(masks.getJob_id());
    // make sure that session exists and still open
    if (session != null && session.isOpen()) {
      System.out.println("mask is sent to client!");
      byte[] bytes = masks.getMasksBytes(); // serialize properly
      session.sendMessage(new BinaryMessage(bytes));

      System.out.println(masks.getMasks().toString().getBytes(StandardCharsets.UTF_8).length);
      session.sendMessage(new TextMessage(masks.getMasks().toString()));
      jobRegistry.removeJob(masks.getJob_id());
    }
  }
}
