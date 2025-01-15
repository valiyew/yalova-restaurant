import { createI18n } from "vue-i18n";
import { en, ru, uz } from "./locales/index";

const messages = {
  en,
  uz,
  ru,
};

const savedLocale = localStorage.getItem("locale") || "en";

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: "en",
  messages,
});

export default i18n;
