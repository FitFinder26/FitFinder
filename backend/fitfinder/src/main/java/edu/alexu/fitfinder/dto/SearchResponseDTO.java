package edu.alexu.fitfinder.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SearchResponseDTO {

  @AllArgsConstructor
  @Getter
  @Setter
  @ToString
  public static class Result {
    long faiss_id;
    double distance;
  }

  String job_id;
  Result[] results;
}
