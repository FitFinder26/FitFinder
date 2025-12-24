package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.exception.UserNotFoundException;
import edu.alexu.fitfinder.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController()
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @PostMapping("/signup")
  public ResponseEntity<Map<String, String>> signup(
      @RequestBody UserDTO user, HttpServletResponse response) {
    Map<String, String> accessToken = userService.SignUP(user, response);
    return ResponseEntity.status(HttpStatus.CREATED).body(accessToken);
  }

  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> login(
      @RequestBody UserDTO user, HttpServletResponse response) {
    Map<String, String> accessToken = userService.LogIn(user, response);
    return ResponseEntity.status(HttpStatus.OK).body(accessToken);
  }

  @PostMapping("/refresh")
  public ResponseEntity<Map<String, String>> refresh(HttpServletRequest request) {
    Map<String, String> accessToken = userService.RefreshToken(request);
    return ResponseEntity.status(HttpStatus.OK).body(accessToken);
  }

  @PostMapping("logout")
  public ResponseEntity<?> logout(HttpServletResponse response) {
    userService.LogOut(response);
    return ResponseEntity.status(HttpStatus.OK).build();
  }

  @GetMapping("/profile")
  public ResponseEntity<?> getProfile(@RequestHeader("Authorization") String token) {
    UserDTO user;
    try {
      if (token != null && token.startsWith("Bearer ")) {
        token = token.substring(7);
      }

      user = userService.getUser(token);
    } catch (UserNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    return ResponseEntity.ok(user);
  }
}
