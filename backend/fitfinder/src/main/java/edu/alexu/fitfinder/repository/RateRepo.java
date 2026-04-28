package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RateRepo extends JpaRepository<Rate, Long> {}
