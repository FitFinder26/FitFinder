import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./providers/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { VITE_CLINT_ID } from "../../shared/config/env.js";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { DeviceProvider } from "./providers/DeviceProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId={VITE_CLINT_ID}>
    <DeviceProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </DeviceProvider>
  </GoogleOAuthProvider>
  // </StrictMode>,
);
