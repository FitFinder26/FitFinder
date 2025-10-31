package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.ValidatorException;
import edu.alexu.fitfinder.repository.UserRepo;
import edu.alexu.fitfinder.service.signup.EmailValidator;
import edu.alexu.fitfinder.service.signup.PasswordValidator;
import edu.alexu.fitfinder.service.signup.Validator;
import edu.alexu.fitfinder.service.signup.UserNameValidator;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.alexu.fitfinder.exception.LogInException;

@Service
public class UserService {

  @Autowired UserRepo userRepo;

  public void SignUP(UserDTO user) throws ValidatorException {

    Validator userNameValidator = new UserNameValidator();
    Validator passwordValidator = new PasswordValidator();
    Validator emailValidator = new EmailValidator(userRepo);
    userNameValidator.setNext(passwordValidator);
    passwordValidator.setNext(emailValidator);
    userNameValidator.validate(user);

    String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
    userRepo.save(new User(user.getUserName(), hashedPassword, user.getEmail()));
  }

  public void LogIn(UserDTO user) throws LogInException {
    String email = user.getEmail();
    String password = user.getPassword();
    if (email == null || password == null) {
      throw new LogInException("Email and password are required");
    }

    User existingUser = userRepo.findByEmail(email);
    if (existingUser == null) {
      throw new LogInException("Invalid email or password");
    }

    if (!BCrypt.checkpw(password, existingUser.getPassword())) {
      throw new LogInException("Invalid email or password");
    }
  }
}
