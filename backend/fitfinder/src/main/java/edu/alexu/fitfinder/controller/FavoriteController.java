package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.exception.FavoriteNotFoundException;
import edu.alexu.fitfinder.exception.ItemNotFoundException;
import edu.alexu.fitfinder.exception.UserNotFoundException;
import edu.alexu.fitfinder.service.FavoriteService;
import edu.alexu.fitfinder.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/favorites")
@CrossOrigin
@RequiredArgsConstructor
public class FavoriteController {

  private final JwtService jwtService;
  private final FavoriteService favoriteService;

  @PostMapping("/{itemId}")
  public ResponseEntity<?> addToFavorites(
      @PathVariable Long itemId, @RequestHeader("Authorization") String token) {

    try {
      Long userId = jwtService.extractUserFromToken(token);
      favoriteService.addFavorite(userId, itemId);
      return ResponseEntity.ok("Item added to favorites");
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
  }

  @DeleteMapping("/id/{favId}")
  public ResponseEntity<?> deleteById(
      @PathVariable Long favId, @RequestHeader("Authorization") String token) {

    try {
      Long userId = jwtService.extractUserFromToken(token);
      favoriteService.deleteFavoriteById(userId, favId);
      return ResponseEntity.ok("Item removed from favorites");

    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    } catch (FavoriteNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    } catch (RuntimeException e) {
      // Catches the "Unauthorized: You do not own this favorite" from Service
      return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
    }
  }

  // This handles DELETE /favorites/5 (Assumes 5 is Item ID)
  @DeleteMapping("/{itemId}")
  public ResponseEntity<?> deleteByItem(
      @PathVariable Long itemId, @RequestHeader("Authorization") String token) {

    try {
      Long userId = jwtService.extractUserFromToken(token);
      favoriteService.deleteFavoriteByItem(userId, itemId);
      return ResponseEntity.ok("Item removed from favorites");

    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    } catch (FavoriteNotFoundException | UserNotFoundException | ItemNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
  }

  @GetMapping
  public ResponseEntity<List<ItemDTO>> getAllFavorites(
      @RequestHeader("Authorization") String token) {
    try {
      Long userId = jwtService.extractUserFromToken(token);
      return ResponseEntity.ok(favoriteService.getUserFavorites(userId));
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
  }
}
