package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.StoredItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StoredItemRepository extends JpaRepository<StoredItem, Long> {
    List<StoredItem> findByItemFAISSIdIn(List<Long> faissIds);
}
