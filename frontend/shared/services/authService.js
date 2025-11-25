import { apiClient } from "./apiClient";
import { tokenService } from "./tokenService";

export const authService = {
  signup: async (userName, email, password) => {
    const response = await apiClient("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      skipAuth: false,
    })

    if (response.status == 201){
      // Extracting the body to get token
      // The backend sends the access token in JSON,
      // and refresh token in a secure HttpOnly cookie.
      const data = await response.json();

      // TTL get returned as EET e.g. Fri Oct 31 00:20:00 EET 2025
      // So this changes it into ISO 8601 e.g. 2025-10-31T01:19:39+02:00
      // Then pass it as milliseconds
      const parsedDateString = new Date(Date.parse(data.expiresIn.replace("EET", "GMT+0200")));
      const expirationDate = new Date (parsedDateString);

      // seting the access token and its TTL
      tokenService.setToken(data.accessToken, expirationDate.getTime());
    }
    return response;
  },

  login: async (email, password) => {
    const response = await apiClient("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      skipAuth: false,
    });

    // Extracting the body to get token
    // The backend sends the access token in JSON,
    // and refresh token in a secure HttpOnly cookie.
    if (response.status == 200){
      const data = await response.json();

      // TTL get returned as EET e.g. Fri Oct 31 00:20:00 EET 2025
      // So this changes it into ISO 8601 e.g. 2025-10-31T01:19:39+02:00
      // Then pass it as milliseconds
      const parsedDateString = new Date(Date.parse(data.expiresIn.replace("EET", "GMT+0200")));
      const expirationDate = new Date (parsedDateString);

      // seting the access token and its TTL
      tokenService.setToken(data.accessToken, expirationDate.getTime());
    }
    return response;
  },

  refreshAccessToken: async () => {
    const response = await apiClient("/auth/refresh", {
      method: "POST",
      skipAuth: true, // don't send old token
    });

    // Extracting the body to get token
    // The backend sends the access token in JSON,
    // and refresh token in a secure HttpOnly cookie.
    const data = await response.json();

    // TTL get returned as EET e.g. Fri Oct 31 00:20:00 EET 2025
    // So this changes it into ISO 8601 e.g. 2025-10-31T01:19:39+02:00
    // Then pass it as milliseconds
    const parsedDateString = new Date(Date.parse(data.expiresIn.replace("EET", "GMT+0200")));
    const expirationDate = new Date (parsedDateString);

    // seting the access token and its TTL
    tokenService.setToken(data.accessToken, expirationDate.getTime());
    return response;
  },

  logout: async () => {
    await apiClient("/auth/logout", {
      method: "POST",
      skipAuth: true,
    });
    tokenService.clearToken();
  },

  sendCode: async (email) => {
    return await apiClient("/auth/send-code", {
      method: "POST",
      body: JSON.stringify({ email }),
      skipAuth: false,
    });
  },

  updatePassword: async (email, newPassword) => {
    return await apiClient("/auth/update-password", {
      method: "POST",
      body: JSON.stringify({ email, newPassword }),
      skipAuth: false,
    });
  }
};
