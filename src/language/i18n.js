import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from './translations/lang.json';
// import resourcesHome from './translations/home.json';

// Merge the resources
const mergedResources = {
  ...resources
};

i18n
  .use(initReactI18next)
  .init({
    resources: mergedResources,
    lng: "uz",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
