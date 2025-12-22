import { apiClient } from "./apiClient";
import { API_BASE_URL } from "../config/env";

let sessionId = null;
let ws = null;
let masks = null;
let maskListeners = [];

export const segmentationService = {
  connect: () => {
    ws = new WebSocket(`${API_BASE_URL.replace(/^https/, "wss")}/ws`);

    ws.onopen = () => {
      console.log("WebSocket Connected");
      // You can send an initial message if needed
      // ws.send(JSON.stringify({ type: "HELLO" }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.sessionId) {
          console.log("Session ID:", data.sessionId);
          // store it properly
          sessionId = data.sessionId;
        } else {
          masks = data;
          console.log("Masks array updated in the service:", masks);
          // 🔥 notify all listeners
          maskListeners.forEach((cb) => cb(masks));
        }
      } catch (error) {
        console.error("Invalid JSON:", event.data);
        throw error;
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = (event) => {
      console.log("WebSocket closed:", event.code, event.reason);
    };
  },

  endSession: () => {
    if (ws) {
      ws.close();
      ws = null;
      sessionId = null;
      console.log("WebSocket connection closed and session ended.");
    } else {
      console.log("No active WebSocket connection to close.");
    }
  },

  getSessionId: () => sessionId,

  subscribeToMasks: (callback) => {
    maskListeners.push(callback);
    return () => {
      maskListeners = maskListeners.filter((cb) => cb !== callback);
    };
  },

  segment: async (formData) => {
    formData.append("sessionId", sessionId);
    console.log(formData.get("sessionId"));
    return await apiClient("/segment/upload", {
      method: "POST",
      body: formData,
      skipAuth: true,
    });
  },

  search: async (mask, prompt) => {
    const formData = new FormData();
    formData.append("job_id", sessionId);
    formData.append("mask_json", JSON.stringify(mask));
    // formData.append("prompt", prompt);
    console.log(formData.get("job_id"));
    console.log(formData.get("mask_json"));
    return await apiClient("/search", {
      method: "POST",
      body: formData,
      skipAuth: true,
    });
  },
};
