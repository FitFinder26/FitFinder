package edu.alexu.fitfinder.entity;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "USER_HISTORY")
@Setter
@Getter
@NoArgsConstructor
public class UserHistory {

  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.SEQUENCE)
  private Long id;

  @OneToMany(mappedBy = "userHistory")
  private User user;

  private Long vectorId;
  private String imageURL;
  private String clothesURL;
  @Nullable
  private String prompt;

  public UserHistory(User user, Long vectorId, String imageURL, String clothesURL, @Nullable String prompt) {
    this.user = user;
    this.vectorId = vectorId;
    this.imageURL = imageURL;
    this.clothesURL = clothesURL;
    this.prompt = prompt;
  }
}
