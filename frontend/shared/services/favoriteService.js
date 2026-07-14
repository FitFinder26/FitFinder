import { apiClient } from "./apiClient";

/**
 * Favorite service
 * Best-practice wrappers around API endpoints for favorites with
 * consistent error handling and clear return semantics.
 */
export const favoriteService = {
  /**
   * Add an item to favorites
   * Returns the fetch Response so callers can inspect status/body as needed
   */
  addToFavorite: async (itemId) => {
    try {
      const response = await apiClient(
        `/api/v1/favorites/${encodeURIComponent(itemId)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          skipAuth: false,
        }
      );
      return response;
    } catch (err) {
      console.error("favoriteService.addToFavorite error: ", err);
      throw err;
    }
  },

  /**
   * Remove a product from favorites (from inside the product)
   */
  removeFromFavorite: async (itemId) => {
    try {
      const response = await apiClient(
        `/api/v1/favorites/${encodeURIComponent(itemId)}`,
        {
          method: "DELETE",
          skipAuth: false,
        }
      );
      return response;
    } catch (err) {
      console.error("favoriteService.removeFromFavorite error: ", err);
      throw err;
    }
  },

  /**
   * Remove a favorite item from the favorites list
   */
  removeFromFavoritesList: async (favId) => {
    try {
      const response = await apiClient(
        `api/v1/favorites/id/${encodeURI(favId)}`,
        {
          method: "DELETE",
          skipAuth: false,
        }
      );
      return response;
    } catch (error) {
      console.error("favoriteService.removeFromFavoritesList error: ", error);
      throw err;
    }
  },

  /**
   * Get all favorites (returns parsed JSON array on success)
   */
  getFavorites: async () => {
    try {
      const response = await apiClient(`/api/v1/favorites`, {
        method: "GET",
        skipAuth: false,
      });
      if (!response.ok) {
        const text = await response.text().catch(() => null);
        throw new Error(
          `Failed to fetch favorites: ${response.status} ${text || ""}`
        );
      }
      return await response.json();
    } catch (err) {
      console.error("favoriteService.getFavorites error:", err);
      throw err;
    }
  },

  /**
   * Convenience: toggle favorite state on the server
   * If shouldFavorite is true -> add, otherwise remove
   */
  toggleFavorite: async (itemId, shouldFavorite) => {
    return shouldFavorite
      ? await favoriteService.addToFavorite(itemId)
      : await favoriteService.removeFromFavorite(itemId);
  },
};
