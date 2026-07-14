package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Data
@Table(name = "USERS")
@NoArgsConstructor
@Getter
@Setter
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  @Column(name = "user_id")
  private Long userId;

  private String userName;
  private String password;
  private String email;

  private String profileImageURL;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<UploadedImage> images;

  public User(String userName, String password, String email) {
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
}
