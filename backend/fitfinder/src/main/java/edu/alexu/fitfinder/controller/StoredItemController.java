package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.service.StoredItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin
public class StoredItemController {

    @Autowired
    private StoredItemService storedItemService;

    @PostMapping("/search")
    public List<StoredItem> getByVectors(@RequestBody List<Long> vectorIds) {
        return storedItemService.getProductsByVectorIds(vectorIds);
    }

    @GetMapping("/product/{id}")
    public StoredItem getItem(@PathVariable Long id) {
        return storedItemService.getItemById(id);
    }
}
