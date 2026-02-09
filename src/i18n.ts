import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import hi from "./locales/hi.json";
import mr from "./locales/mr.json";
import sp from "./locales/sp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    hi: { translation: hi },
    mr: { translation: mr },
    sp: { translation: sp },
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
