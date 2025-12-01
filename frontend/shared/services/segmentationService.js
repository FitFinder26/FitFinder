import { apiClient } from "./apiClient";
let sessionId = null;
let ws = null;
let masks = null;
export const segmentationService = {
  connect: () => {
    ws = new WebSocket("ws://localhost:8081/ws");

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
        } else if (data.mask) {
          masks = data.mask;
          console.log("Masks array updated in the service:", masks);
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
    return sessionId;
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

  getMasks: () => masks,

  segment: async (formData) => {
    formData.append("sessionId", sessionId);
    console.log(formData.get("sessionId"));
    return await apiClient("/segment/upload", {
      method: "POST",
      body: formData,
      skipAuth: true,
    });
  },
};
