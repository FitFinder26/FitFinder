package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.UserEntity;
import edu.alexu.fitfinder.exception.ValidatorException;
import edu.alexu.fitfinder.repository.UserRepo;
import edu.alexu.fitfinder.service.signup.EmailValidator;
import edu.alexu.fitfinder.service.signup.PasswordValidator;
import edu.alexu.fitfinder.service.signup.Validator;
import edu.alexu.fitfinder.service.signup.UserNameValidator;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    userRepo.save(new UserEntity(user.getUserName(), hashedPassword, user.getEmail()));
  }
}
