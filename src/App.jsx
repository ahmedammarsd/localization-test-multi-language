import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

import './App.css'

const language = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl"
  }
]
function App() {
  const currenLanguageCode = localStorage.getItem("i18nextLng") || "en"
  const currenLanguage = language.find(l => l.code === currenLanguageCode)
  const {t} = useTranslation();

  useEffect( () => {
    document.body.dir = currenLanguage.dir || "ltr"
  },[currenLanguage])

  const releseDate = new Date("2023-08-05");
  const timeDifference = new Date() - releseDate;
  const number_dayss = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
   <div>
    <div>
      {
        language.map( (code ,index) => (
          <div key={index}>
          <button type="button"
          onClick={() => {
            i18next.changeLanguage(code.code)
          }}
          disabled={code.code === currenLanguageCode}
          >
            {code.name}
          </button>
          <br /> <br />
          </div>
        ))
      }
    </div>
    <h2>{t("key")}</h2>
    <p>
      {t("test_test")}
    </p>
    <p>
      {t("number_days" ,{number_dayss} )}
    </p>
   </div>
  )
}

export default App
