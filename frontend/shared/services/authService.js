import { apiClient } from "./apiClient";
import { tokenService } from "./tokenService";

export const authService = {
  signup: async (userName, email, password) => {
    const response = await apiClient("/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      skipAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      // Extracting the body to get token
      // The backend sends the access token in JSON,
      // and refresh token in a secure HttpOnly cookie.
      const data = await response.json();

      // TTL get returned as EET e.g. Fri Oct 31 00:20:00 EET 2025
      // So this changes it into ISO 8601 e.g. 2025-10-31T01:19:39+02:00
      // Then pass it as milliseconds
      const parsedDateString = new Date(
        Date.parse(data.expiresIn.replace("EET", "GMT+0200"))
      );
      const expirationDate = new Date(parsedDateString);

      // seting the access token and its TTL
      tokenService.setToken(data.accessToken, expirationDate.getTime());
    }
    return response;
  },

  login: async (email, password) => {
    const response = await apiClient("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      skipAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Extracting the body to get token
    // The backend sends the access token in JSON,
    // and refresh token in a secure HttpOnly cookie.
    if (response.status == 200) {
      const data = await response.json();

      // TTL get returned as EET e.g. Fri Oct 31 00:20:00 EET 2025
      // So this changes it into ISO 8601 e.g. 2025-10-31T01:19:39+02:00
      // Then pass it as milliseconds
      const parsedDateString = new Date(
        Date.parse(data.expiresIn.replace("EET", "GMT+0200"))
      );
      const expirationDate = new Date(parsedDateString);

      // seting the access token and its TTL
      tokenService.setToken(data.accessToken, expirationDate.getTime());
    }
    return response;
  },

  refreshAccessToken: async () => {
    // Call refresh without sending Authorization header (skipAuth: true)
    const response = await apiClient("/api/v1/auth/refresh", {
      method: "POST",
      skipAuth: true,
    });

    // If server returned an error status, show helpful info
    if (!response.ok) {
      const text = await response.text().catch(() => null);
      throw new Error(`Refresh failed: ${response.status} ${text || ""}`);
    }

    const data = await response.json().catch(() => null);
    if (!data || !data.expiresIn) {
      throw new Error("Refresh response missing required 'expiresIn' value");
    }

    // Parse expiresIn robustly (supports EET strings, ISO strings, or numeric timestamps)
    let expiryMs;
    if (typeof data.expiresIn === "string") {
      // support strings with timezone text like 'EET'
      const s = data.expiresIn.includes("EET")
        ? data.expiresIn.replace("EET", "GMT+0200")
        : data.expiresIn;
      expiryMs = Date.parse(s);
    } else if (typeof data.expiresIn === "number") {
      expiryMs = data.expiresIn;
    } else {
      throw new Error("Unknown format for 'expiresIn' in refresh response");
    }

    if (Number.isNaN(expiryMs) || expiryMs <= 0) {
      throw new Error("Invalid 'expiresIn' value in refresh response");
    }

    tokenService.setToken(data.accessToken, expiryMs);
    return response;
  },

  logout: async () => {
    try {
      await apiClient("/api/v1/auth/logout", {
        method: "POST",
        skipAuth: true,
      });
    } catch (err) {
      // don't prevent client-side logout if server call fails
      console.warn("Logout request failed:", err);
    } finally {
      tokenService.clearToken();
    }
  },

  sendCode: async (email) => {
    return await apiClient("/api/v1/auth/send-code", {
      method: "POST",
      body: JSON.stringify({ email }),
      skipAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  updatePassword: async (email, newPassword) => {
    return await apiClient("/api/v1/auth/update-password", {
      method: "POST",
      body: JSON.stringify({ email, newPassword }),
      skipAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  updateProfileImage: async (file) => {
    const form = new FormData();
    form.append("image", file);
    const response = await apiClient("/api/v1/auth/profile/photo", {
      method: "PUT",
      body: form,
      skipAuth: false,
    });
    return response;
  },

  getProfile: async () => {
    const response = await apiClient("/api/v1/auth/profile", {
      method: "GET",
      skipAuth: false,
    });
    return response;
  },
};
