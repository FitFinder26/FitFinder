package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.StoredItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ItemRepo extends JpaRepository<StoredItem, Long> {
    @Query(value = "SELECT item_id FROM stored_items ORDER BY RANDOM() LIMIT 20", nativeQuery = true)
    List<Long> findRandomIds();
}