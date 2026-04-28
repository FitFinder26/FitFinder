package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.RateDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.repository.RateRepo;
import edu.alexu.fitfinder.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class RateController {

  private final RateRepo rateRepo;
  private final RateService rateService;

  @PostMapping("/api/v1/auth/rating")
  public ResponseEntity<?> storeFeedback(@RequestBody RateDTO feedback)
      throws InvalidInputException {
    System.out.println(feedback.toString());
    rateService.addRate(feedback);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
