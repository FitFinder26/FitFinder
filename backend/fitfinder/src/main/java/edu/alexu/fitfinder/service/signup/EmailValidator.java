package edu.alexu.fitfinder.service.signup;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.exception.UserAlreadyExistsException;
import edu.alexu.fitfinder.repository.UserRepo;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EmailValidator extends Validator {

  UserRepo userRepo;

  @Override
  protected void check(UserDTO user) throws InvalidInputException, UserAlreadyExistsException {

    String email = user.getEmail();

    if (email == null) {
      throw new InvalidInputException("Email is required.");
    }

    boolean isValid =
        org.apache.commons.validator.routines.EmailValidator.getInstance().isValid(email);
    if (!isValid) {
      throw new InvalidInputException("Email isn't valid");
    }

    User existingUser = userRepo.findByEmail(email);
    if (existingUser != null) {
      throw new UserAlreadyExistsException("Email already exists.");
    }
  }
}
