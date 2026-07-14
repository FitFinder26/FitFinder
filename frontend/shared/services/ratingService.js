import { apiClient } from "./apiClient";

export const ratingService = {
  rateProduct: (productId, rank, originalImage, rating) => {
    return apiClient("/api/v1/rating", {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        rank: rank,
        original_image: originalImage,
        rating: rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
