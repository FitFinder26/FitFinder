package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.dto.SearchRequestDTO;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.repository.ItemRepo;
import edu.alexu.fitfinder.service.SearchService;
import edu.alexu.fitfinder.service.StoredItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
public class SearchController {

  @Autowired SearchService searchService;
  @Autowired StoredItemService storedItemService;

  @PostMapping("/search")
  public ResponseEntity<?> searchByImageMask(@RequestBody SearchRequestDTO searchInfo)
      throws Exception {
    List<Long> vectorIds = searchService.getSimilarIndices(searchInfo);
    if (vectorIds.isEmpty()) return ResponseEntity.ok().body(new LinkedList<>());
    return ResponseEntity.ok().body(storedItemService.getProductsByVectorIds(vectorIds));
  }

  @Autowired private ItemRepo findRandomEntities;
  @GetMapping("/random")
  public List<ItemDTO> getRandomItems() {
    // 1. Get the random IDs
    List<Long> randomIds = findRandomEntities.findRandomIds();

    // 2. Fetch the actual entities using those IDs
    List<ItemDTO> items = storedItemService.getRandomProducts(randomIds);

    // Optional: findAllById returns items sorted by ID usually.
    // If you want them shuffled in the response as well:
    java.util.Collections.shuffle(items);

    return items;
  }
}
