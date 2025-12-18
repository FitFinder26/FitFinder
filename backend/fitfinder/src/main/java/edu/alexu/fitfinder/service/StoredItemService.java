package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.entity.ItemVector;
import edu.alexu.fitfinder.repository.StoredItemRepository;
import edu.alexu.fitfinder.repository.ItemVectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoredItemService {

    @Autowired
    private StoredItemRepository storedItemRepository;
    @Autowired
    private final ItemVectorRepository itemVectorRepository;

    public StoredItemService(StoredItemRepository storedItemRepository,
                             ItemVectorRepository itemVectorRepository) {
        this.storedItemRepository = storedItemRepository;
        this.itemVectorRepository = itemVectorRepository;
    }

    public List<StoredItem> getProductsByVectorIds(List<Long> vectorIds) {
        List<ItemVector> vectors = itemVectorRepository.findByVectorIdIn(vectorIds);
        return vectors.stream()
                .map(ItemVector::getItem)
                .distinct()
                .toList();
    }

    public StoredItem getItemById(Long id) {
        return storedItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found"));
    }
}
