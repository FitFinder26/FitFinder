let accessToken = null;
let tokenExpiry = null; // timestamp in ms
let TTL = null; // time to live in seconds

export const tokenService = {
  setToken: (token, expiresIn) => {
    accessToken = token;
    // `expiresIn` may be either an absolute timestamp (ms since epoch)
    // or a TTL in seconds. Handle both cases:
    if (!expiresIn) {
      tokenExpiry = null;
      TTL = null;
      return;
    }

    if (typeof expiresIn === "number" && expiresIn > Date.now()) {
      // absolute timestamp in ms
      tokenExpiry = expiresIn;
    } else {
      // treat as TTL in seconds
      tokenExpiry = Date.now() + expiresIn * 1000;
    }

    // store TTL in seconds (rounded down)
    TTL = Math.floor((tokenExpiry - Date.now()) / 1000);
  },

  getToken: () => accessToken,
  getTTL: () => TTL,
  clearToken: () => {
    accessToken = null;
    tokenExpiry = null;
    TTL = null;
  },

  isExpired: () => {
    if (!tokenExpiry) return true;
    return Date.now() >= tokenExpiry;
  },

  getTimeToExpiry: () => {
    if (!tokenExpiry) return 0;
    return tokenExpiry - Date.now();
  },
};
