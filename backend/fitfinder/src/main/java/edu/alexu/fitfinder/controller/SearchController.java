package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.dto.SearchRequestDTO;
import edu.alexu.fitfinder.repository.ItemRepo;
import edu.alexu.fitfinder.service.SearchService;
import edu.alexu.fitfinder.service.StoredItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
@RequiredArgsConstructor
public class SearchController {

  private final ItemRepo findRandomEntities;
  private final SearchService searchService;
  private final StoredItemService storedItemService;

  @PostMapping("/search")
  public ResponseEntity<?> searchByImageMask(
          @RequestBody SearchRequestDTO searchInfo,
          @RequestHeader("Authorization") String token)
      throws Exception {

    List<Long> vectorIds = searchService.getSimilarIndices(searchInfo);
    if (vectorIds.isEmpty()) return ResponseEntity.ok().body(new LinkedList<>());
    return ResponseEntity.ok().body(storedItemService.getProductsByVectorIds(vectorIds));
  }

  @GetMapping("/random")
  public List<ItemDTO> getRandomItems() {
    List<Long> randomIds = findRandomEntities.findRandomIds();
    List<ItemDTO> items = storedItemService.getProducts(randomIds);
    java.util.Collections.shuffle(items);
    return items;
  }

  @PostMapping("/fav/:id")
  private ResponseEntity<?> addFav(@RequestParam("id") Long item_id){
    
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
