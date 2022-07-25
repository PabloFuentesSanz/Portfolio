import React, { useState } from "react";
import i18next from "i18next";

import "./style.css";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", text: "English" },
  { value: "es", text: "Español" },
];
function Header() {
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    i18next.changeLanguage(e.target.value);
  };
  return (
    <header className="header">
      <div className="topContenedor">
        <a
          href="https://www.linkedin.com/in/pablo-fuentes-512258134/"
          target="_blank"
          className="linkContact"
        >
          <img
            src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
            className="linkContact"
          />
        </a>
        <a
          href="https://github.com/PabloFuentesSanz"
          target="_blank"
          className="linkContact"
        >
          <img
            src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
            className="linkContact"
          />
        </a>
        <select value={lang} onChange={handleChange} className="lang">
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
      <img src="./assets/logo.png" className="logo" />
      <h2 className="subtitle">{t("Software")}</h2>
      <div className="svg-hero">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="svg-wave"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="path"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
