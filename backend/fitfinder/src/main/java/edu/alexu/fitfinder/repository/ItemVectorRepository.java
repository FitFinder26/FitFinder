package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.ItemVector;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemVectorRepository extends JpaRepository<ItemVector, Long> {

    List<ItemVector> findByVectorIdIn(List<Long> vectorIds);
}
