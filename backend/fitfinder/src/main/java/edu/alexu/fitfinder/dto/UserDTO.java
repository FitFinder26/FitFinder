package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO {
  private Long id;
  private String profileImageURL;
  private String userName;
  private String password;
  private String email;
}
