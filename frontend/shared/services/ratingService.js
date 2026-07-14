import { apiClient } from "./apiClient";

export const ratingService = {
  rateProduct: (productId, rank, originalImage, rating, prompt) => {
    return apiClient("/api/v1/auth/rating", {
      method: "POST",
      body: JSON.stringify({
        item_id: productId,
        rank: rank,
        original_image: originalImage,
        rating: rating,
        prompt: prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
  },
};
