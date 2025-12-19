package edu.alexu.fitfinder.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AISearchResponseDTO {
    private List<Long> indices;
    private List<Double> scores;
}
