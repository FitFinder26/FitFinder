package edu.alexu.fitfinder.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.List;

@AllArgsConstructor
@Getter
public class ImageMasksDTO {
  String job_id;
  String status;
  List<List<List<Integer>>> masks;
}
