package edu.alexu.fitfinder.service.signup;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.exception.UserAlreadyExistsException;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Validator {

  private Validator next;

  public void validate(UserDTO user) throws InvalidInputException, UserAlreadyExistsException {
    check(user);
    if (next != null) {
      next.validate(user);
    }
  }

  protected abstract void check(UserDTO user)
      throws InvalidInputException, UserAlreadyExistsException;
}
