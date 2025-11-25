let accessToken = null;
let tokenExpiry = null; // timestamp in ms
let TTL = null; // time to live in seconds

export const tokenService = {
    setToken: (token, expiresIn) => {
        accessToken = token;
        tokenExpiry = Date.now() + expiresIn;
        TTL = expiresIn;
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
