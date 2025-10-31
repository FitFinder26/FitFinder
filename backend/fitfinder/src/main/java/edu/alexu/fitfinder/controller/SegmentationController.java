package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.component.JobRegistry;
import edu.alexu.fitfinder.dto.ImageMasksDTO;
import edu.alexu.fitfinder.dto.ResegmentImageDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;
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
      @RequestParam MultipartFile image, @RequestParam String sessionId)
      throws IOException, Exception {

    Map<String, String> response = segmentationService.UploadImageAndSegment(image, sessionId);
    return ResponseEntity.status(HttpStatus.OK).body(response);
  }

  @PostMapping("/re-segment")
  public ResponseEntity<?> resegment(
      @RequestParam String sessionId, @RequestBody ResegmentImageDTO resegmentInfo)
      throws InvalidInputException, Exception {

    segmentationService.Resegment(sessionId, resegmentInfo);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PutMapping("/segmentation/callback")
  public void segmentationCallback(@RequestBody ImageMasksDTO masks) throws IOException {
    System.out.println("mask has been received from hugging face!");
    WebSocketSession session = jobRegistry.getSession(masks.getJob_id());
    // make sure that session exists and still open
    if (session != null && session.isOpen()) {
      if (masks.getStatus().equals("re-segmented"))
        session.sendMessage(new TextMessage(masks.getMasks().toString()));
      else
        session.sendMessage(
            new TextMessage(
                "{\"masks\": "
                    + masks.getMasks().toString()
                    + ", \"boxes\": "
                    + masks.getBoxes().toString()
                    + "}"));

      System.out.println("mask has been sent to client!");
      jobRegistry.removeJob(masks.getJob_id());
    }
  }
}
