import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RTL_LANGS } from "./index";

/** Syncs <html lang> and <html dir> with the active i18next language. */
export function useHtmlLangDir() {
  const { i18n } = useTranslation();

  // On mount, restore language from localStorage (defers LanguageDetector logic to client-side)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const initLang = () => {
      const saved = localStorage.getItem("zariaspa-lang");
      if (saved && saved !== i18n.language) {
        i18n.changeLanguage(saved);
      } else if (!saved) {
        // detect from navigator if not saved
        const navLang = navigator.language.split("-")[0];
        if (["en", "fa", "ps", "ar"].includes(navLang) && navLang !== i18n.language) {
          i18n.changeLanguage(navLang);
        }
      }
    };
    setTimeout(initLang, 0);
  }, []); // Only run once on mount

  // Sync lang and dir attributes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const lng = i18n.language || "en";
    const dir = RTL_LANGS.includes(lng) ? "rtl" : "ltr";
    document.documentElement.lang = lng;
    document.documentElement.dir = dir;

    // Save language whenever it changes
    localStorage.setItem("zariaspa-lang", lng);
  }, [i18n.language]);
}
