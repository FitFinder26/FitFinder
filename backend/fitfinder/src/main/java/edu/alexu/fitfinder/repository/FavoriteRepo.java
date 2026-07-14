package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.Favorite;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepo extends JpaRepository<Favorite, Long> {
    boolean existsByUserAndItem(User user, StoredItem item);

    Optional<Favorite> findByUserAndItem(User user, StoredItem item);
}
