import { apiClient } from "./apiClient";
import { API_BASE_URL } from "../config/env";
import search_request from "../constants/search_request.json";

let sessionId = null;
let jobId = null;
let ws = null;
let masks = null;
let maskListeners = [];

export const segmentationService = {
  connect: () => {
    ws = new WebSocket(`${API_BASE_URL.replace(/^https/, "wss")}ws`);

    ws.onopen = () => {
      console.log("WebSocket Connected");
      // You can send an initial message if needed
      // ws.send(JSON.stringify({ type: "HELLO" }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data?.sessionId) {
          // store it properly
          sessionId = data.sessionId;
        } else if (data?.masks && data?.boxes) {
          masks = data;
          // 🔥 notify all listeners
          maskListeners.forEach((cb) => cb(masks));
        } else {
          // 🔥 notify all listeners
          maskListeners.forEach((cb) =>
            cb({
              error:
                "Something is wrong with the segementation, please try again.",
            })
          );
          throw new Error("Unknown message format");
        }
      } catch (error) {
        console.error("Something is wrong with the response: ", event.data);
        console.error(error);
        // 🔥 notify all listeners
        maskListeners.forEach((cb) =>
          cb({
            error:
              "Something is wrong with the segementation, please try again.",
          })
        );
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
    const isConnected = () => ws && ws.readyState === WebSocket.OPEN;
    if (!isConnected || !sessionId) {
      segmentationService.connect();
    }
    formData.append("sessionId", sessionId);
    let data;
    await apiClient("/segment/upload", {
      method: "POST",
      body: formData,
      skipAuth: false,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Segmentation request failed");
        }
        return response.json();
      })
      .then((resData) => {
        if (resData?.job_id) jobId = resData.job_id;
        data = resData;
      })
      .catch((error) => {
        console.error("Segmentation error:", error);
        throw error;
      });

    return data;
  },

  resegment: async (formData) => {
    const isConnected = () => ws && ws.readyState === WebSocket.OPEN;
    if (!isConnected || !sessionId) {
      segmentationService.connect();
    }

    formData = { ...formData, job_id: jobId };

    return await apiClient(`/re-segment?sessionId=${sessionId}`, {
      method: "POST",
      body: JSON.stringify(formData),
      skipAuth: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  search: async (mask, prompt) => {
    return await apiClient("/api/v1/items/search", {
      method: "POST",
      skipAuth: false,

      body: JSON.stringify({
        job_id: jobId,
        mask_json: mask,
        prompt: prompt
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
