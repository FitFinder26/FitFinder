package edu.alexu.fitfinder.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StoredItemWithVectorIdDTO {
  Long itemId;
  String title;
  String description;
  String category;
  String imageURL;
  String itemWebURL;
  float price;
  String currency;
  Long vectorId;
}
