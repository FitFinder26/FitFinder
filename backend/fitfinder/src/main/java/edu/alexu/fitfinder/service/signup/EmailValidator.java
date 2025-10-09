package edu.alexu.fitfinder.service.signup;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.UserEntity;
import edu.alexu.fitfinder.exception.ValidatorException;
import edu.alexu.fitfinder.repository.UserRepo;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EmailValidator extends Validator {

  UserRepo userRepo;

  @Override
  protected void check(UserDTO user) throws ValidatorException {

    String email = user.getEmail();

    if (email == null) {
      throw new ValidatorException("Email is required.");
    }

    boolean isValid =
        org.apache.commons.validator.routines.EmailValidator.getInstance().isValid(email);
    if (!isValid) {
      throw new ValidatorException("Email isn't valid");
    }

    UserEntity existingUser = userRepo.findByEmail(user.getEmail());
    if (existingUser != null) {
      throw new ValidatorException("Email already exists.");
    }
  }
}
