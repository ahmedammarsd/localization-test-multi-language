import React , { Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend"

i18next
.use(initReactI18next) //passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
 // lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
 supportedLngs: ['en' , 'ar'],
 fallbackLng: "en",
 // debug: true,
  // resources: {
  //   en: {
  //     translation: {
  //       "key": "hello world"
  //     }
  //   },
  //   ar: {
  //     translation: {
  //       "key": "اهلا"
  //     }
  //   }
  // },
  detction:{
    order: ['path','cookie', 'htmlTag', 'localStorage', 'subdomain'],
    caches: ['cookie'],
  },
  backend:{
    loadPath: '/assets/locales/{{lng}}/translation.json',
  },
 // react: { useSuspense: false}
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
//document.getElementById('output').innerHTML = i18next.t('key');
const Loading = () => (
  <div>
    LOADING...
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
)
