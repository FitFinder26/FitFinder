package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
  UserEntity findByEmail(String email);
}
