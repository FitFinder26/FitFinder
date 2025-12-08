package edu.alexu.fitfinder.entity;

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

  private String title;
  private float price;
  private String currency;
  private String itemWebURL;
  private String imageURL;
  private String category;

  @Lob
  @Column(columnDefinition = "TEXT")
  private String description;

  private String source;
  @CreationTimestamp
  private LocalDateTime createdAt;

  public StoredItem(
      String title,
      float price,
      String currency,
      String itemWebURL,
      String imageURL,
      String category,
      String description,
      String source
      
    ) {
    this.title = title;
    this.price = price;
    this.currency = currency;
    this.itemWebURL = itemWebURL;
    this.imageURL = imageURL;
    this.category = category;
    this.description = description;
    this.source = source;
  }
}
