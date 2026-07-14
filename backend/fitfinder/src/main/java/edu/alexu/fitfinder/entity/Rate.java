package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "FEEDBACKS")
@NoArgsConstructor
@Getter
@Setter
public class Rate {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  @Column(name = "feedback_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "item_id", nullable = false)
  private StoredItem item;

  private String imageURL;
  private int rate;
  private int rank;
  private String prompt;

  public Rate(StoredItem item, String imageURL, int rate, int rank, String prompt) {
    this.item = item;
    this.imageURL = imageURL;
    this.rate = rate;
    this.rank = rank;
    this.prompt = prompt;
  }
}
