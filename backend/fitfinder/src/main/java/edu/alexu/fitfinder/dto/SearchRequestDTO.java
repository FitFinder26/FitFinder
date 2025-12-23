package edu.alexu.fitfinder.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SearchRequestDTO {
  String job_id;
  String image_url;
  List<List<Integer>> mask_json;
  String prompt;
}
