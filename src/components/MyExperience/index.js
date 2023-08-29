import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function MyExperience() {
  const { t } = useTranslation();

  return (
    <section className="cards contenedor">
      <h2 className="titulo">{t("Expe")}</h2>
      <div className="content-cards">
        <article className="card cardExp">
          <img
            src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
            className="gitImg"
          />

          <i className="far fa-clone"></i>
          <h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png"
              className="logoCompany"
            />{" "}
            Alten Delivery Center
          </h3>
          <p className="content">{t("dec")}</p>
          <span className="smallText">
            <small>
              {t("alten1")}
              <br/><br/><b>{t("techsN")}</b> Angular, TypeScript, Scala, Unit test Back (Play, Mockito) - Front (Jasmine, TestBed), MongoDB, Jira, Jenkins, BitBucket, Confluence.
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <img
            src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
            className="gitImg"
          />

          <i className="fas fa-database"></i>
          <h3>
            <img
              src="https://pbs.twimg.com/profile_images/502173031234433025/gtzqxUff_400x400.png"
              className="logoCompany"
            />{" "}
            Zalcu
          </h3>
          <p className="content">{t("feb")}</p>
          <span className="smallText">
            <small>
            {t("zalcu1")}
            <br/><br/><b>{t("techsN")}</b> React, NodeJS, Python, PHP, MongoDB, MySQL,Linux, Git, AmazonWebServices
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <img
            src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
            className="gitImg"
          />

          <i className="fas fa-database"></i>
          <h3>
            <img
              src="https://www.itd.upm.es/wp-content/uploads/2020/10/LOGOTIPO-color-PNG.png"
              className="logoCompany"
            />{" "}
            {t("intern")}
          </h3>
          <p className="content">2019 - 2020</p>
          <span className="smallText">
            <small>
            {t("upm1")} <b>PHP</b>, {t("upm2")} <b>DevOps</b>.
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <img
            src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
            className="gitImg"
          />

          <i className="far fa-object-group"></i>
          <h3>
            <img
              src="https://www.accenture.com/t00010101T000000Z__w__/es-es/_acnmedia/Accenture/Redesign-Assets/Careers/Images/Marquee/5/Accenture-ProBono-Consulting-XS-marquee.png"
              className="logoCompany"
            />{" "}
            Accenture
          </h3>
          <p className="content">Mar. 2017 - Sep. 2017</p>
          <span className="smallText">
            <small>
              {t("acc")}
            <br/><br/><b>{t("techsN")}</b> Java, JUnit, PLSQL
            </small>
          </span>
        </article>
      </div>
    </section>
  );
}

export default MyExperience;
