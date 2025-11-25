package edu.alexu.fitfinder.service.signup;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;

public class UserNameValidator extends Validator {

  /**
   * length between 3 and 30 contains only letters, digits, spaces and start only with letters and
   * not end with space
   */
  private final String USERNAME_PATTERN = "^(?=.{3,30}$)" + "[A-Za-z][A-Za-z0-9 ]*[A-Za-z0-9]$";

  @Override
  protected void check(UserDTO user) throws InvalidInputException {

    String userName = user.getUserName();
    if (userName == null) {
      throw new InvalidInputException("User Name is required.");
    }

    if (!userName.matches(USERNAME_PATTERN)) {
      throw new InvalidInputException(
          "Username must be 3–30 characters, start with a letter, contain only letters, digits, or spaces, and not end with a space.");
    }
  }
}
