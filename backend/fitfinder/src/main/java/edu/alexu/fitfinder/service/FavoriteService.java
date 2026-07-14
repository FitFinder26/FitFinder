package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.entity.Favorite;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.FavoriteNotFoundException;
import edu.alexu.fitfinder.exception.ItemNotFoundException;
import edu.alexu.fitfinder.exception.UserNotFoundException;
import edu.alexu.fitfinder.mapper.ItemMapper;
import edu.alexu.fitfinder.repository.FavoriteRepo;
import edu.alexu.fitfinder.repository.ItemRepo;
import edu.alexu.fitfinder.repository.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor // Lombok for constructor injection
public class FavoriteService {

    private final FavoriteRepo favoriteRepo;
    private final UserRepo userRepo;
    private final ItemRepo itemRepo;
    private final ItemMapper itemMapper;

    @Transactional
    public Long  addFavorite(Long userId, Long itemId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        StoredItem item = itemRepo.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("Item not found"));

        if (favoriteRepo.existsByUserAndItem(user, item)) {
            throw new RuntimeException("Item is already in favorites");
        }

        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setItem(item);

        Favorite savedFav = favoriteRepo.save(favorite);

        return savedFav.getId();
    }

    @Transactional
    public void deleteFavoriteById(Long userId, Long favoriteId){
        Favorite fav = favoriteRepo.findById(favoriteId)
                .orElseThrow(() -> new FavoriteNotFoundException("Favorite not found"));

        if (!fav.getUser().getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized: You do not own this favorite");
        }

        favoriteRepo.delete(fav);
    }

    @Transactional
    public void deleteFavoriteByItem(Long userId, Long itemId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        StoredItem item = itemRepo.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("Item not found"));

        Favorite fav = favoriteRepo.findByUserAndItem(user, item)
                .orElseThrow(() -> new FavoriteNotFoundException("Favorite not found"));

        favoriteRepo.delete(fav);
    }

    public List<ItemDTO> getUserFavorites(Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));

        List<Favorite> favorites = favoriteRepo.findAllByUser(user);

        return favorites.stream()
                .map(fav -> itemMapper.toDTO(fav.getItem(), true))
                .collect(Collectors.toList());

    }
}