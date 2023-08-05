import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './App.css'

const language = [
  {
    code: "en",
    name: "English",
    country_code: "gb"
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa"
  }
]
function App() {
  const {t} = useTranslation();

  const releseDate = new Date("2023-05-08");
  const timeDifference = new Date() - releseDate;
  const numberOfDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
   <div>
    <div>
      {
        language.map( (code ,index) => (
          <div key={index}>
          <button>
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
      {t("number_days" ,{numberOfDays} )}
    </p>
   </div>
  )
}

export default App
