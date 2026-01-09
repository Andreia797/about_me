import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from '../../locales/pt/translation.json';
import translationEN from '../../locales/en/translation.json';

const savedLanguage = localStorage.getItem('language') || 'pt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: translationPT,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

