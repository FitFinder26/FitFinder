package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "USERS")
@NoArgsConstructor
@Getter
@Setter
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long userId;

  private String userName;
  private String password;
  private String email;

  public UserEntity(String userName, String password, String email) {
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
}
