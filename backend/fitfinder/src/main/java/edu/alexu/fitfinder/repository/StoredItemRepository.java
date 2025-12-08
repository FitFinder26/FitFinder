package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.StoredItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoredItemRepository extends JpaRepository<StoredItem, Long> {

}
