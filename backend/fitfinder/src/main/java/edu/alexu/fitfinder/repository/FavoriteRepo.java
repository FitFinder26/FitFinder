package edu.alexu.fitfinder.repository;

import edu.alexu.fitfinder.entity.Favorite;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface FavoriteRepo extends JpaRepository<Favorite, Long> {
    boolean existsByUserAndItem(User user, StoredItem item);

    Optional<Favorite> findByUserAndItem(User user, StoredItem item);

    List<Favorite> findAllByUser(User user);

    @Query("SELECT f.item.itemId FROM Favorite f WHERE f.user.userId = :userId")
    Set<Long> findFavoriteItemIds(@Param("userId") Long userId);
}
