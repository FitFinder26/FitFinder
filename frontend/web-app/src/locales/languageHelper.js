import i18n from "./i18n";

/**
 * Supported languages in the application
 */
export const LANGUAGES = {
  ENGLISH: "en",
  ARABIC: "ar",
};

/**
 * Get the current language
 * @returns {string} Current language code (e.g., 'en' or 'ar')
 */
export const getCurrentLanguage = () => {
  return i18n.language;
};

/**
 * Change the application language
 * @param {string} language - Language code to switch to ('en' or 'ar')
 * @returns {Promise} Promise that resolves when the language is changed
 */
export const changeLanguage = async (language) => {
  if (!Object.values(LANGUAGES).includes(language)) {
    console.warn(
      `Language '${language}' is not supported. Falling back to English.`
    );
    language = LANGUAGES.ENGLISH;
  }

  try {
    await i18n.changeLanguage(language);

    // Update document direction for RTL support
    updateDocumentDirection(language);

    // Store the language preference
    localStorage.setItem("preferredLanguage", language);

    return language;
  } catch (error) {
    console.error("Error changing language:", error);
    throw error;
  }
};

/**
 * Toggle between English and Arabic
 * @returns {Promise<string>} Promise that resolves with the new language code
 */
export const toggleLanguage = async () => {
  const currentLang = getCurrentLanguage();
  const newLang =
    currentLang === LANGUAGES.ENGLISH ? LANGUAGES.ARABIC : LANGUAGES.ENGLISH;

  await changeLanguage(newLang);
  return newLang;
};

/**
 * Check if the current language is Arabic
 * @returns {boolean} True if current language is Arabic
 */
export const isArabic = () => {
  return getCurrentLanguage() === LANGUAGES.ARABIC;
};

/**
 * Check if the current language is English
 * @returns {boolean} True if current language is English
 */
export const isEnglish = () => {
  return getCurrentLanguage() === LANGUAGES.ENGLISH;
};

/**
 * Update document direction based on language (RTL for Arabic, LTR for English)
 * @param {string} language - Language code
 */
export const updateDocumentDirection = (language) => {
  const isRTL = language === LANGUAGES.ARABIC;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.documentElement.lang = language;
};

/**
 * Get the display name of a language
 * @param {string} languageCode - Language code ('en' or 'ar')
 * @returns {string} Display name of the language
 */
export const getLanguageDisplayName = (languageCode) => {
  const names = {
    [LANGUAGES.ENGLISH]: "English",
    [LANGUAGES.ARABIC]: "العربية",
  };
  return names[languageCode] || languageCode;
};

/**
 * Get all available languages with their display names
 * @returns {Array<{code: string, name: string}>} Array of language objects
 */
export const getAvailableLanguages = () => {
  return Object.values(LANGUAGES).map((code) => ({
    code,
    name: getLanguageDisplayName(code),
  }));
};

// Initialize document direction on module load
if (typeof document !== "undefined") {
  updateDocumentDirection(getCurrentLanguage());
}
