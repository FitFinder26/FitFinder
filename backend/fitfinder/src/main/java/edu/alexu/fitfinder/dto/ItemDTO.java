package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class ItemDTO {
  private Long item_id;
  private String category;
  private String currency;
  private String description;
  private String imageURL;
  private String itemWebURL;
  private float price;
  private String title;
}
