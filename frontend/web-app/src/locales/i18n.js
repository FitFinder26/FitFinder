import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./resources";
import { DEFAULT_NAMESPACE, NAMESPACES } from "./namespaces";

const supportedLanguages = Object.keys(resources);
const namespaces = Object.values(NAMESPACES);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    ns: namespaces,
    defaultNS: DEFAULT_NAMESPACE,
    fallbackNS: DEFAULT_NAMESPACE,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    returnEmptyString: false,
  });

export default i18n;
