package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.UploadedImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepo extends JpaRepository<UploadedImage, Long> {
}
