package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.repository.projection.StoredItemWithVectorId;
import edu.alexu.fitfinder.entity.StoredItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ItemRepo extends JpaRepository<StoredItem, Long> {
  @Query(value = "SELECT item_id FROM stored_items ORDER BY RANDOM() LIMIT 20", nativeQuery = true)
  List<Long> findRandomIds();

  @Query(value = """
          SELECT DISTINCT si.*, vi.vector_id FROM STORED_ITEMS si
          JOIN ITEM_VECTOR vi ON vi.item_id = si.item_id
          WHERE vi.vector_id IN :vectorIds
          """, nativeQuery = true)
  List<StoredItemWithVectorId> findItemsByVectorIds(@Param("vectorIds") List<Long> vectorIds);
}
