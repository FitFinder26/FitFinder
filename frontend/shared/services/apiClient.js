import { tokenService } from "./tokenService";
import { authService } from "./authService";
import { API_BASE_URL } from "../config/env";

let refreshingPromise = null;

export const apiClient = async (endpoint, options = {}) => {
  const { skipAuth, ...fetchOptions } = options;

  // ⏱ Auto-refresh if token close to expiry (e.g., < 30s)
  // Only attempt refresh when we actually have a token; otherwise a
  // refresh call during unauthenticated flows caused spurious requests.
  if (
    !skipAuth &&
    tokenService.getToken() &&
    tokenService.getTimeToExpiry() < 30000
  ) {
    if (!refreshingPromise) {
      refreshingPromise = authService
        .refreshAccessToken()
        .catch((err) => {
          console.error("Token refresh failed:", err);
          tokenService.clearToken();
          throw err;
        })
        .finally(() => {
          refreshingPromise = null;
        });
    }
    await refreshingPromise;
  }

  const token = tokenService.getToken();

  const headers = {
    // "Content-Type": "application/json",
    ...(fetchOptions.headers || {}),
    ...(token && !skipAuth ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
    // credentials: "include", // always send cookies
  });

  // 452 means the refresh cookie may have expired
  if (response.status == 452 && !skipAuth) {
    tokenService.clearToken();
    throw new Error("Unauthorized — session expired");
  }

  return response;
};
