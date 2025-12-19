package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.service.StoredItemService;
import edu.alexu.fitfinder.service.AiClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
public class StoredItemController {

    private final StoredItemService storedItemService;
    private final AiClientService aiClientService;

    
    public StoredItemController(StoredItemService storedItemService, AiClientService aiClientService) {
        this.storedItemService = storedItemService;
        this.aiClientService = aiClientService;
    }

    @PostMapping("/search")
    public List<StoredItem> searchByImage(@RequestBody String imageUrl) {
        List<Long> vectorIds = aiClientService.getSimilarIndices(imageUrl);
        return storedItemService.getProductsByVectorIds(vectorIds);
    }


    @GetMapping("/product/{id}")
    public StoredItem getItem(@PathVariable Long id) {
        return storedItemService.getItemById(id);
    }
}
