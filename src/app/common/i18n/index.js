/* eslint-disable  */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { enLang, frLang } from './languages';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: enLang,
  fr: frLang,
};

// i18n
//   // .use(Backend)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init(
//     {
//       resources,
//       lng: 'en',

//       keySeparator: false, // we do not use keys in form messages.welcome

//       interpolation: {
//         escapeValue: false, // react already safes from xss
//       },
//       // backend: {
//       //   loadPath: 'http://localhost:8080/locales/{{lng}}/{{ns}}.json',
//       // },
//     },
//     // eslint-disable-next-line consistent-return
//     (err, t) => {
//       // eslint-disable-next-line no-console
//       if (err) return console.error(err);
//       // eslint-disable-next-line no-console
//       console.log(t('welcome'));
//       // eslint-disable-next-line no-console
//       console.log(t('welcome', { lng: 'fr' }));
//     },
//   );

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      // resources,
      lng: 'en',
      fallbackLng: 'en',
      preload: ['en', 'fr'],
      ns: ['translation'],
      defaultNS: 'translation',
      backend: {
        loadPath: 'http://localhost:8080/locales/{{lng}}/{{ns}}.json',
      },
    },
    (err, t) => {
      if (err) {
        console.error(err);
      }
      console.log('Adding additional resource');
      i18n.addResources('en', 'static', enLang.static);
      i18n.addResources('fr', 'static', frLang.static);
      console.log('Resources updated');
    },
  );

export default i18n;
