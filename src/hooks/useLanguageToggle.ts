import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isVNM, setIsVNM] = useState(true);

  useEffect(() => {
    const lang = localStorage.getItem("language") || "vi";
    setIsVNM(lang === "vi");
    i18n.changeLanguage(lang);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = isVNM ? "en" : "vi";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setIsVNM(!isVNM);
  };

  return { isVNM, toggleLanguage };
}; 