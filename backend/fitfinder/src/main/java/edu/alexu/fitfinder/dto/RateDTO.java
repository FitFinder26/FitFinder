package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@ToString
public class RateDTO {
  Long item_id;
  int rank;
  String original_image;
  int rating;
  String prompt;
}
