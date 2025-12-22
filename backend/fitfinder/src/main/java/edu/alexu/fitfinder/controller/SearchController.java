package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.dto.SearchRequestDTO;
import edu.alexu.fitfinder.service.AIService;
import edu.alexu.fitfinder.service.StoredItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
public class SearchController {

  @Autowired AIService AIService;
  @Autowired StoredItemService storedItemService;

  @PostMapping("/search")
  public List<ItemDTO> searchByImageMask(@RequestBody SearchRequestDTO searchInfo)
      throws Exception {
    List<Long> vectorIds = AIService.getSimilarIndices(searchInfo);
    if (vectorIds.isEmpty()) return new LinkedList<>();
    return storedItemService.getProductsByVectorIds(vectorIds);
  }
}
