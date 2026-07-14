import { apiClient } from "./apiClient";

export const recomendedationService = {
  getRandomProducts: () => {
    return apiClient("/api/v1/items/random", {
      method: "GET",
      skipAuth: true,
    });
  },
};
