package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.RateDTO;
import edu.alexu.fitfinder.entity.Rate;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.repository.ItemRepo;
import edu.alexu.fitfinder.repository.RateRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor // Lombok for constructor injection
public class RateService {
  private final ItemRepo itemRepo;
  private final RateRepo rateRepo;

  public void addRate(RateDTO feedback) {
    if (feedback.getRating() <= 0 || feedback.getRating() > 5)
      throw new InvalidInputException("The rate should be between 1 & 5 inclusive");

    StoredItem item =
        itemRepo
            .findById(feedback.getItem_id())
            .orElseThrow(() -> new InvalidInputException("Item not found"));

    try {
      RestTemplate restTemplate = new RestTemplate();
      restTemplate.exchange(feedback.getOriginal_image(), HttpMethod.HEAD, null, Void.class);
    } catch (Exception e) {
      throw new InvalidInputException("The imageURL isn't valid");
    }

    rateRepo.save(
        new Rate(
            item,
            feedback.getOriginal_image(),
            feedback.getRating(),
            feedback.getRank(),
            feedback.getPrompt() == null ? "" : feedback.getPrompt().trim()));
  }
}
