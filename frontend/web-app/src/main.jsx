import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./providers/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { I18nextProvider } from "react-i18next";
import { VITE_CLINT_ID } from "../../shared/config/env.js";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { DeviceProvider } from "./providers/DeviceProvider.jsx";
import i18n from "./locales/i18n";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId={VITE_CLINT_ID}>
    <I18nextProvider i18n={i18n}>
      <DeviceProvider>
        <ThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </DeviceProvider>
    </I18nextProvider>
  </GoogleOAuthProvider>
  // </StrictMode>,
);
