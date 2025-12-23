package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.SearchRequestDTO;
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
}
