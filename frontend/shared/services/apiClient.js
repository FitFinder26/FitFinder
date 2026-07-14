import { tokenService } from "./tokenService";
import { authService } from "./authService";
import { API_BASE_URL } from "@shared/config/env";

const buildUrl = (base, path) => {
  try {
    return new URL(path, base).toString();
  } catch (err) {
    console.error("Invalid API base URL", base, err);
    return path;
  }
};

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
    ...(fetchOptions.headers || {}),
    ...(token && !skipAuth ? { Authorization: `Bearer ${token}` } : {}),
    ...(API_BASE_URL?.includes("ngrok")
      ? { "ngrok-skip-browser-warning": "true" }
      : {}),
  };

  const response = await fetch(buildUrl(API_BASE_URL, endpoint), {
    // mode: "cors",
    // credentials: "include",
    ...fetchOptions,
    headers,
  });

  // 452 means the refresh cookie may have expired
  if (response.status == 452 && !skipAuth) {
    tokenService.clearToken();
    throw new Error("Unauthorized — session expired");
  }

  return response;
};
