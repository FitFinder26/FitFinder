package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.exception.UnauthorizedException;
import edu.alexu.fitfinder.exception.UserAlreadyExistsException;
import edu.alexu.fitfinder.repository.UserRepo;
import edu.alexu.fitfinder.service.signup.EmailValidator;
import edu.alexu.fitfinder.service.signup.PasswordValidator;
import edu.alexu.fitfinder.service.signup.Validator;
import edu.alexu.fitfinder.service.signup.UserNameValidator;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

  @Autowired UserRepo userRepo;
  @Autowired JwtService jwtService;

  private final int REFRESH_TOKEN_MAX_AGE = 3 * 60 * 60; // 3 hours
  private final String REFRESH_TOKEN_PATH = "/auth";

  private Cookie GenerateRefreshCookie(long id) {
    String refreshToken = jwtService.generateRefreshToken(id + "");

    Cookie cookie = new Cookie("refreshToken", refreshToken);
    cookie.setHttpOnly(true);
    // cookie.setSecure(true); // only on HTTPS
    cookie.setPath(REFRESH_TOKEN_PATH);
    cookie.setMaxAge(REFRESH_TOKEN_MAX_AGE);
    cookie.setAttribute("SameSite", "Strict");
    return cookie;
  }

  private Cookie DeleteRefreshToken() {
    Cookie cookie = new Cookie("refreshToken", null);
    cookie.setHttpOnly(true);
    // cookie.setSecure(true);  // only on https
    cookie.setPath(REFRESH_TOKEN_PATH);
    cookie.setMaxAge(0);
    cookie.setAttribute("SameSite", "Strict");
    return cookie;
  }

  public Map<String, String>DTO user, HttpServletResponse response)
      throws InvalidInputException, UserAlreadyExistsException {

    Validator userNameValidator = new UserNameValidator();
    Validator passwordValidator = new PasswordValidator();
    Validator emailValidator = new EmailValidator(userRepo);
    userNameValidator.setNext(passwordValidator);
    passwordValidator.setNext(emailValidator);
    userNameValidator.validate(user);

    // save record in the database
    String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
    User databaseRecord = new User(user.getUserName(), hashedPassword, user.getEmail());
    userRepo.save(databaseRecord);

    // generate jwt refresh token
    response.addCookie(GenerateRefreshCookie(databaseRecord.getUserId()));

    String accessToken = jwtService.generateAccessToken(databaseRecord.getUserId() + "");
    Map<String, String> jwtAccessToken = new HashMap<>();
    jwtAccessToken.put("accessToken", accessToken);
    jwtAccessToken.put("expiresIn", jwtService.extractExpiration(accessToken).toString());
    return jwtAccessToken;
  }

  public Map<String, String> LogIn(UserDTO user, HttpServletResponse response)
      throws InvalidInputException {
    String email = user.getEmail();
    String password = user.getPassword();
    if (email == null || password == null) {
      throw new InvalidInputException("Email and password are required");
    }

    User existingUser = userRepo.findByEmail(email);
    if (existingUser == null || !BCrypt.checkpw(password, existingUser.getPassword())) {
      throw new InvalidInputException("Invalid email or password");
    }

    // generate jwt refresh token
    response.addCookie(GenerateRefreshCookie(existingUser.getUserId()));

    // generate jwt authentication token
    Map<String, String> jwtToken = new HashMap<>();
    jwtToken.put("token", jwtService.generateToken(databaseRecord.getUserId() + ""));
    return jwtToken;
  }

  public Map<String, String> RefreshToken(HttpServletRequest request) throws UnauthorizedException {
    String refreshToken = null;
    if (request.getCookies() != null) {
      for (Cookie cookie : request.getCookies()) {
        if ("refreshToken".equals(cookie.getName())) {
          refreshToken = cookie.getValue();
          break;
        }
      }
    }

    if (refreshToken == null) {
      throw new UnauthorizedException("No refresh Token is found");
    }

    if (jwtService.isTokenExpired(refreshToken)) {
      throw new UnauthorizedException("Refresh token is expired");
    }

    // check that user still exists
    String userId = jwtService.extractUserId(refreshToken);
    if (!userRepo.existsById(Long.parseLong(userId)))
      throw new UnauthorizedException("User doesn't exist");

    // Create new access token
    String newAccessToken = jwtService.generateAccessToken(userId);
    Map<String, String> jwtAccessToken = new HashMap<>();
    jwtAccessToken.put("accessToken", newAccessToken);
    jwtAccessToken.put("expiresIn", jwtService.extractExpiration(newAccessToken).toString());
    return jwtAccessToken;
  }

  public void LogOut(HttpServletResponse response) {
    response.addCookie(DeleteRefreshToken());
  }
}
