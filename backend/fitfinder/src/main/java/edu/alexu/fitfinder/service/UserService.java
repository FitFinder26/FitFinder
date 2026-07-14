package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.ValidatorException;
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
import edu.alexu.fitfinder.exception.LogInException;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

  @Autowired UserRepo userRepo;
  @Autowired JwtService jwtService;

  private final int REFRESH_TOKEN_MAX_AGE = 3 * 60 * 60; // 3 hours
  private final String REFRESH_TOKEN_PATH = "/auth";

    // validate user information
    Validator userNameValidator = new UserNameValidator();
    Validator passwordValidator = new PasswordValidator();
    Validator emailValidator = new EmailValidator(userRepo);
    userNameValidator.setNext(passwordValidator);
    passwordValidator.setNext(emailValidator);
    userNameValidator.validate(user);

    // save record in the database
    String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
    User databaseRecord = new UserEntity(user.getUserName(), hashedPassword, user.getEmail());
    userRepo.save(databaseRecord);

    // generate jwt authentication token
    Map<String, String> jwtToken = new HashMap<>();
    jwtToken.put("token", jwtService.generateToken(databaseRecord.getUserId() + ""));
    return jwtToken;
  }

  public Map<String, String> LogIn(UserDTO user) throws LogInException {
    String email = user.getEmail();
    String password = user.getPassword();
    if (email == null || password == null) {
      throw new LogInException("Email and password are required");
    }

    User existingUser = userRepo.findByEmail(email);
    if (existingUser == null || !BCrypt.checkpw(password, existingUser.getPassword())) {
      throw new LogInException("Invalid email or password");
    }

    // generate jwt authentication token
    Map<String, String> jwtToken = new HashMap<>();
    jwtToken.put("token", jwtService.generateToken(existingUser.getUserId() + ""));
    return jwtToken;

  }
}
