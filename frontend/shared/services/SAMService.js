import { apiClient } from "./apiClient";

export const SAMService = {
    segment: async (formData, selectedPoints, deselectedPoints) => {
        return await apiClient("/segment", {
            method: "POST",
            skipAuth: true,
            body: JSON.stringify({
                formData,
                selectedPoints,
                deselectedPoints
            }),
            });
      },
    search: async(croppedImageURL, prompt) => {
        return await apiClient("/search", {
            method: "POST",
            skipAuth: true,
            body: JSON.stringify({ 
                croppedImageURL,
                prompt
             }),
            });
    }
}