import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { tokenService } from "../services/tokenService";

export const useAuth = () => {
  const [token, setToken] = useState(tokenService.getToken());
  const [user, setUser] = useState(null);

  const signup = async (username, email, password) => {
    const data = await authService.signup(username, email, password);
    setToken(tokenService.getToken());
    scheduleRefresh(); // start auto-refresh timer
    return data;
  };

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setToken(tokenService.getToken());
    scheduleRefresh(); // start auto-refresh timer
    return data;
  };

  const logout = async () => {
    await authService.logout();
    setToken(null);
    clearTimeout(refreshTimer);
  };
  const sendCode = async (email) => {
    const data = await authService.sendCode(email);
    return data;
  };

  const updatePassword = async (email, newPassword) => {
    const data = await authService.updatePassword(email, newPassword);
    return data;
  };

  const isAuthenticated = () => {
    return !tokenService.isExpired();
  };

  // Background refresh scheduling
  let refreshTimer;
  const scheduleRefresh = () => {
    clearTimeout(refreshTimer);
    const timeLeft = tokenService.getTimeToExpiry();
    if (timeLeft > 30000) {
      refreshTimer = setTimeout(async () => {
        try {
          await authService.refreshAccessToken();
          setToken(tokenService.getToken());
          scheduleRefresh(); // reschedule after refresh
        } catch (err) {
          console.error("Background refresh failed:", err);
          alert("Sorry but your session has expired. Please login again!");
          logout();
        }
      }, timeLeft - 30000); // refresh 30s before expiry
    }
  };

  // Initialize if already logged in
  useEffect(() => {
    if (token) scheduleRefresh();
    return () => clearTimeout(refreshTimer);
  }, [token]);

  return {
    signup,
    login,
    logout,
    isAuthenticated,
    sendCode,
    updatePassword,
    user,
  };
};
