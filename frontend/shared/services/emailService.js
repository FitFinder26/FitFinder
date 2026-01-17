import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  APP_NAME,
} from "../config/env";

const FEEDBACK_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform";

function ensureEmailJsInit() {
  try {
    if (EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY);
  } catch (_) {
    // ignore init race
  }
}

export const emailService = {
  /**
   * Sends a welcome email via EmailJS using a client-side template.
   * Expects the template to support variables: to_email, to_name, app_name, feedback_link.
   * Returns a normalized result { ok, status } but never throws (to avoid blocking UX).
   */
  async sendWelcomeEmail(toEmail, toName) {
    if (!toEmail) return { ok: false, status: 400 };

    const subject = `Welcome to ${APP_NAME || "FitFinder"} 🎉`;
    const body = `Hi ${toName || "there"},%0D%0A%0D%0AWelcome to ${
      APP_NAME || "FitFinder"
    }! We're excited to have you on board.%0D%0A%0D%0AWe'd love your feedback: ${
      FEEDBACK_LINK
    }%0D%0A%0D%0AThanks,%0D%0AThe ${APP_NAME || "FitFinder"} Team`;

    const fallbackMailto = () => {
      try {
        const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
          subject,
        )}&body=${body}`;
        window.open(mailto, "_blank");
      } catch (_) {
        // ignore
      }
    };

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.warn(
        "EmailJS env vars missing: VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID",
      );
      fallbackMailto();
      return { ok: false, status: 412 };
    }

    ensureEmailJsInit();

    const templateParams = {
      to_email: toEmail,
      to_name: toName || "",
      app_name: APP_NAME || "FitFinder",
      feedback_link: FEEDBACK_LINK,
    };

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      return { ok: true, status: 200, result: res?.status };
    } catch (err) {
      console.error("EmailJS send failed:", err);
      fallbackMailto();
      return { ok: false, status: 0 };
    }
  },
};
