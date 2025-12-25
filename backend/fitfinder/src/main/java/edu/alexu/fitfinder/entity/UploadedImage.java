package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "UPLOADED_IMAGES")
@NoArgsConstructor
@Getter
@Setter
public class UploadedImage {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long uploadedImgId;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  private Long uploadedFAISSId;
  private String imageURL;
  private String name;

  //  private boolean[][] mask;

  public UploadedImage(User user, Long uploadedFAISSId, String imageURL /*, boolean[][] mask*/) {
    this.user = user;
    this.uploadedFAISSId = uploadedFAISSId;
    this.imageURL = imageURL;
    //    this.mask = mask;
  }
}
