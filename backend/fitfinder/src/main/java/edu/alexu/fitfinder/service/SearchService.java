package edu.alexu.fitfinder.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.dto.*;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.mapper.StoredItemWithVectorIdMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchService {

  @Value("${cloudinary.url}")
  private Cloudinary cloudinary;

  @Value("${forwarding.url}")
  private String forwardingUrl;

  private final WebClient webClient =
      WebClient.builder().baseUrl("https://fitfinder-ai-service.hf.space").build();
  private final StoredItemService storedItemService;
  private  final StoredItemWithVectorIdMapper storedItemWithVectorIdMapper;

  public SimilarItemsDTO getSimilarItems(SearchRequestDTO searchInfo)
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

    return constructSimilarItemsResponse(response);
  }

  private SimilarItemsDTO constructSimilarItemsResponse(SearchResponseDTO response) {
    // Validate response
    if (response == null || response.getResults() == null || response.getResults().length == 0)
      return new SimilarItemsDTO();

    // collect vectorIds
    LinkedList<Long> vectorIds = new LinkedList<>();
    for (SearchResponseDTO.Result result : response.getResults())
      vectorIds.add(result.getFaiss_id());

    List<StoredItemWithVectorIdDTO> similarItems =
        storedItemService.getProductsByVectorIds(vectorIds);

    // order with occurrence in vectorIds and remove items duplicate
    Map<Long, List<StoredItemWithVectorIdDTO>> itemsByVectorId =
        similarItems.stream()
            .collect(Collectors.groupingBy(StoredItemWithVectorIdDTO::getVectorId));

    Set<Long> seenItemIds = new HashSet<>();

   List<ItemDTO> items = vectorIds.stream()
        .distinct()
        .flatMap(vectorId -> itemsByVectorId.getOrDefault(vectorId, List.of()).stream())
        .filter(item -> seenItemIds.add(item.getItemId()))
           .map(storedItemWithVectorIdMapper::toItemDto)
        .toList();

   return  new SimilarItemsDTO(response.getSegmented_image_url(), items);
  }
}
