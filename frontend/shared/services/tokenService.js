export const tokenService = {
  setToken: (token, expiresIn) => {
    // persist token value
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }

    // handle no expiry provided
    if (!expiresIn) {
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("TTL");
      return;
    }

    // normalize expiresIn into an absolute timestamp in ms
    let expiryTs;
    if (typeof expiresIn === "number" && expiresIn > Date.now()) {
      expiryTs = expiresIn;
    } else {
      // treat as TTL in seconds
      expiryTs = Date.now() + Number(expiresIn) * 1000;
    }

    localStorage.setItem("tokenExpiry", String(expiryTs));

    // store TTL in seconds (rounded down)
    const ttlSeconds = Math.max(0, Math.floor((expiryTs - Date.now()) / 1000));
    localStorage.setItem("TTL", String(ttlSeconds));
  },

  getToken: () => {
    return localStorage.getItem("accessToken") || null;
  },

  getTTL: () => {
    const ttl = localStorage.getItem("TTL");
    if (ttl !== null && !Number.isNaN(Number(ttl))) return Number(ttl);
    const expiry = localStorage.getItem("tokenExpiry");
    if (!expiry) return null;
    return Math.max(0, Math.floor((Number(expiry) - Date.now()) / 1000));
  },

  clearToken: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("TTL");
  },

  isExpired: () => {
    const expiry = localStorage.getItem("tokenExpiry");
    if (!expiry) return true;
    return Date.now() >= Number(expiry);
  },

  getTimeToExpiry: () => {
    const expiry = localStorage.getItem("tokenExpiry");
    if (!expiry) return 0;
    return Math.max(0, Number(expiry) - Date.now());
  },
};
