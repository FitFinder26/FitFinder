package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class UserController {

  @Autowired private UserService userService;

  @PostMapping("/auth/signup")
  public ResponseEntity<Map<String, String>> signup(
      @RequestBody UserDTO user, HttpServletResponse response) {
    Map<String, String> accessToken = userService.SignUP(user, response);
    return ResponseEntity.status(HttpStatus.CREATED).body(accessToken);
  }

  @PostMapping("/auth/login")
  public ResponseEntity<Map<String, String>> login(
      @RequestBody UserDTO user, HttpServletResponse response) {
    Map<String, String> accessToken = userService.LogIn(user, response);
    return ResponseEntity.status(HttpStatus.OK).body(accessToken);
  }

  @PostMapping("/auth/refresh")
  public ResponseEntity<Map<String, String>> refresh(HttpServletRequest request) {
    Map<String, String> accessToken = userService.RefreshToken(request);
    return ResponseEntity.status(HttpStatus.OK).body(accessToken);
  }

  @PostMapping("/auth/logout")
  public ResponseEntity<?> logout(HttpServletResponse response) {
    userService.LogOut(response);
    return ResponseEntity.status(HttpStatus.OK).build();
  }
}
