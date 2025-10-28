import { apiClient } from "./apiClient";

export const SAMService = {
    segment: async (formData, selectedPoints, deselectedPoints) => {
        const data = await apiClient("/segment", {
            method: "POST",
            body: JSON.stringify({
                formData,
                selectedPoints,
                deselectedPoints
            }),
            });
        return data;
      },
    search: async(croppedImageURL, prompt) => {
        const data = await apiClient("/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                croppedImageURL,
                prompt
             }),
            });
        return data;
    }
}