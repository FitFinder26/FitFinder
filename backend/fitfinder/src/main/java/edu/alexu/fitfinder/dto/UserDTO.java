package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserDTO {
  private String userName;
  private String password;
  private String email;
}
