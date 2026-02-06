import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: require("../locals/en.json"),
  },
  hd: {
    Translation: require("../locals/hd.json"),
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});
