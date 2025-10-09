package edu.alexu.fitfinder.service.signup;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.exception.ValidatorException;

public class PasswordValidator extends Validator {

  /**
   * at least one uppercase, letter at least one lowercase letter, at least one digit, at least one
   * special char, no leading or trailing spaces and length between 8 and 64
   */
  private final String PASSWORD_PATTERN =
      "^(?=.*[A-Z])"
          + "(?=.*[a-z])"
          + "(?=.*\\d)"
          + "(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:,.<>?])"
          + "(?!.*^ |.* $)"
          + ".{8,64}$";

  @Override
  protected void check(UserDTO user) throws ValidatorException {

    String password = user.getPassword();
    if (password == null) {
      throw new ValidatorException("Password is required.");
    }

    if (!password.matches(PASSWORD_PATTERN)) {
      throw new ValidatorException(
          "Password must be 8–64 chars long, contain uppercase, lowercase, digit, and special character, and not start/end with spaces.");
    }
  }
}
