package edu.alexu.fitfinder.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.dto.SearchRequestDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import edu.alexu.fitfinder.dto.SearchResponseDTO;
import java.util.LinkedList;
import java.util.List;

@Service
public class SearchService {

  @Value("${cloudinary.url}")
  private Cloudinary cloudinary;

  @Value("${forwarding.url}")
  private String forwardingUrl;

  private final WebClient webClient;

  public SearchService() {
    this.webClient = WebClient.builder().baseUrl("https://fitfinder-ai-service.hf.space").build();
  }

  public List<Long> getSimilarIndices(SearchRequestDTO searchInfo)
      throws InvalidInputException, Exception {

    // Validate mask
    if (searchInfo.getMask_json() == null) throw new InvalidInputException("Mask couldn't be null");

    // Validate job_id
    try {
      searchInfo.setImage_url(
          cloudinary
              .api()
              .resource(searchInfo.getJob_id(), ObjectUtils.emptyMap())
              .get("secure_url")
              .toString());
    } catch (Exception e) {
      throw new InvalidInputException("There is no image associated with job Id");
    }

    if (searchInfo.getPrompt() != null) searchInfo.setPrompt(searchInfo.getPrompt().trim());

    // Call AI Service
    SearchResponseDTO response =
        webClient
            .post()
            .uri("/api/v1/job/search/")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(searchInfo)
            .retrieve()
            .bodyToMono(SearchResponseDTO.class)
            .block();

    // Validate response
    if (response == null) throw new Exception();

    // No matched elements
    LinkedList<Long> vectorIds = new LinkedList<>();
    if (response.getResults() == null || response.getResults().length == 0) return vectorIds;

    // Extract Vector Ids
    for (SearchResponseDTO.Result result : response.getResults())
      vectorIds.add(result.getFaiss_id());
    return vectorIds;
  }
}
