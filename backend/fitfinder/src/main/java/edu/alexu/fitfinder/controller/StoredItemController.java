package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.service.StoredItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin
public class StoredItemController {

    private final StoredItemService storedItemService;

    public StoredItemController(StoredItemService storedItemService) {
        this.storedItemService = storedItemService;
    }

    @PostMapping("/search")
    public List<StoredItem> getByVectors(@RequestBody List<Long> vectorIds) {
        return storedItemService.getProductsByVectorIds(vectorIds);
    }

    @GetMapping("/product/{id}")
    public StoredItem getItem(@PathVariable Long id) {
        return storedItemService.getItemById(id);
    }
}
