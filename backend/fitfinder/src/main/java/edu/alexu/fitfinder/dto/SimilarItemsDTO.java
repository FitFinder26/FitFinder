package edu.alexu.fitfinder.dto;

import lombok.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SimilarItemsDTO {
  String segmented_image_url;
  List<ItemDTO> items;
}
