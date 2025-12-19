package edu.alexu.fitfinder.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import edu.alexu.fitfinder.dto.AISearchResponseDTO;

@Service
public class AiClientService {

    private final RestTemplate restTemplate;

    public AiClientService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Long> getSimilarIndices(String imageUrl) {

        String url =
            "https://fitfinder-ai-service.hf.space/api/v1/job/search/?image_url="
            + imageUrl;

        ResponseEntity<AISearchResponseDTO> response =
                restTemplate.getForEntity(url, AISearchResponseDTO.class);

        return response.getBody().getIndices();
    }
}
