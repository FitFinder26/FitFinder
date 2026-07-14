package edu.alexu.fitfinder.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "STORED_ITEMS")
@NoArgsConstructor
@Getter
@Setter
public class StoredItem {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long itemId;

  private String category;
  @CreationTimestamp private LocalDateTime createdAt;
  private String currency;

  @Column(columnDefinition = "TEXT", name = "description")
  private String description;

  private boolean embedded;
  private String imageURL;
  private String itemWebURL;
  private float price;
  private String source;
  private String title;

  public StoredItem(
      String category,
      LocalDateTime createdAt,
      String currency,
      String description,
      boolean embedded,
      String imageURL,
      String itemWebURL,
      float price,
      String source,
      String title) {
    this.category = category;
    this.createdAt = createdAt;
    this.currency = currency;
    this.description = description;
    this.embedded = embedded;
    this.imageURL = imageURL;
    this.itemWebURL = itemWebURL;
    this.price = price;
    this.source = source;
    this.title = title;
  }
}
