package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.component.JobRegistry;
import edu.alexu.fitfinder.dto.ImageMasksDTO;
import edu.alexu.fitfinder.service.SegmentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import java.io.IOException;
import java.util.Map;

@RestController
public class SegmentationController {

  @Autowired SegmentationService segmentationService;
  @Autowired JobRegistry jobRegistry;

  @PostMapping("/segment/upload")
  public ResponseEntity<?> uploadImage(
      @RequestParam("image") MultipartFile image, @RequestParam String sessionId)
      throws IOException {

    System.out.println("Hey from uploading image controller!");
    Map<String, String> jobId = segmentationService.uploadImage(image, sessionId);
    System.out.println("Image is sent to segmentation successfully!");
    return ResponseEntity.status(HttpStatus.OK).body(jobId);
  }

  @PutMapping("/segment/callback")
  public void receiveCallback(@RequestBody ImageMasksDTO masks) throws IOException {

    System.out.println("mask has benn received from hugging face!");
    WebSocketSession session = jobRegistry.getSession(masks.getJob_id());
    // make sure that session exists and still open
    if (session != null && session.isOpen()) {
      System.out.println("mask is sent to client!");
      session.sendMessage(new TextMessage(masks.getMasks().toString()));
      jobRegistry.removeJob(masks.getJob_id());
    }
  }
}
