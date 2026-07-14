package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.dto.SearchRequestDTO;
import edu.alexu.fitfinder.repository.ItemRepo;
import edu.alexu.fitfinder.service.JwtService;
import edu.alexu.fitfinder.service.SearchService;
import edu.alexu.fitfinder.service.StoredItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
@RequiredArgsConstructor
public class SearchController {

  private final JwtService jwtService;
  private final ItemRepo findRandomEntities;
  private final SearchService searchService;
  private final StoredItemService storedItemService;

  @PostMapping("/search")
  public ResponseEntity<?> searchByImageMask(@RequestBody SearchRequestDTO searchInfo)
      throws Exception {
    try {
      return ResponseEntity.ok().body(searchService.getSimilarItems(searchInfo));
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
  }

  @GetMapping("/random")
  public List<ItemDTO> getRandomItems() {
    List<Long> randomIds = findRandomEntities.findRandomIds();
    List<ItemDTO> items = storedItemService.getProducts(randomIds);
    java.util.Collections.shuffle(items);
    return items;
  }

  @PostMapping("/fav/:id")
  private ResponseEntity<?> addFav(@RequestParam("id") Long item_id) {
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
