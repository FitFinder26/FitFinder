import { apiClient } from "./apiClient";
import { tokenService } from "./tokenService";

export const authService = {
  signup: async (userName, email, password) => {
    const data = await apiClient("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      skipAuth: false,
    });

    // The backend sends the access token in JSON,
    // and refresh token in a secure HttpOnly cookie.
    tokenService.setToken(data.accessToken, data.expiresIn);
    return data;
  },

  login: async (email, password) => {
    const data = await apiClient("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      skipAuth: false,
    });

    // The backend sends the access token in JSON,
    // and refresh token in a secure HttpOnly cookie.
    tokenService.setToken(data.accessToken, data.expiresIn);
    return data;
  },

  refreshAccessToken: async () => {
    const data = await apiClient("/auth/refresh", {
      method: "POST",
      skipAuth: true, // don't send old token
    });

    tokenService.setToken(data.accessToken, data.expiresIn);
    return data.accessToken;
  },

  logout: async () => {
    await apiClient("/auth/logout", {
      method: "POST",
      skipAuth: true,
    });
    tokenService.clearToken();
  },

  sendCode: async (email) => {
    const data = await apiClient("/auth/send-code", {
      method: "POST",
      body: JSON.stringify({ email }),
      skipAuth: false,
    });
    return data;
  },

  updatePassword: async (email, newPassword) => {
    const data = await apiClient("/auth/update-password", {
      method: "POST",
      body: JSON.stringify({ email, newPassword }),
      skipAuth: false,
    });
    return data;
  },
};
