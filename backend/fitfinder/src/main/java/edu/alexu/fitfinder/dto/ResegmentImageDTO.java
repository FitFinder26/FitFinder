package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ResegmentImageDTO {
  String job_id;
  String image_url;
  int[][] pos_points;
  int[][] neg_points;
  int[][] boxes;
  String callback_url;
}
