package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.repository.StoredItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoredItemService {

    private final StoredItemRepository storedItemRepository;

    public StoredItemService(StoredItemRepository storedItemRepository) {
        this.storedItemRepository = storedItemRepository;
    }

    public List<StoredItem> getProductsByFaiss(List<Long> faissIds) {
        return storedItemRepository.findByItemFAISSIdIn(faissIds);
    }

    public StoredItem getItemById(Long id) {
    return storedItemRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found"));
}

}
