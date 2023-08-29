import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

function WaveMenu() {
  const { t } = useTranslation();

  return (
    <>
      <section className="wave-container main">
        <div className="contenedor-textos-main">
          <h2 className="titulo left">{t('About')}</h2>
          <p className="parrafo">
            {t('about1')}
            <br />
            <br />
            {t('about3')}
          </p>
          <a
            className="linkPr"
            href="./assets/cvPablo.pdf"
            download="PabloFuentesCV.pdf"
          >
            <p>
              <img
                src="https://www.casascarpinteria.com/wp-content/uploads/2021/02/Icono-Descargar.png"
                className="imgDow"
              />
              {t('descarga')}
            </p>
          </a>
          <small>
            {t('port')}
            <a
              className="linkPr"
              href="https://github.com/PabloFuentesSanz/Portfolio"
              target="_blank"
            >
              {t('repo')}
            </a>
            .
          </small>
        </div>
        <img src="./assets/ilustracion1.svg" alt="" />
      </section>
      <section className="info">
        <div className="contenedor">
          <h2 className="titulo left">{t('Techs')}</h2>
          <div className="imgsTechs">
            <span className="separate">
              <a href="https://es.reactjs.org/" target="_blank" title="React">
                <img
                  className="imgTech"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                />
              </a>
              <a href="https://angular.io/" target="_blank" title="Angular">
                <img
                  className="imgTech"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                title="TypeScript"
              >
                <img
                  className="imgTech"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                />
              </a>
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                target="_blank"
                title="JavaScript"
              >
                <img
                  className="imgTech"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                />
              </a>
            </span>
            <span className="separate">
              <a href="https://nodejs.org/es/" target="_blank" title="NodeJs">
                <img
                  className="imgTech"
                  src="https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png"
                />
              </a>
              <a href="https://nextjs.org/" target="_blank" title="NextJs">
                <img
                  className="imgTech"
                  src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                />
              </a>
              <a
                href="https://www.scala-lang.org/"
                target="_blank"
                title="Scala"
              >
                <img
                  className="imgTech"
                  src="https://cdn-icons-png.flaticon.com/512/919/919834.png"
                />
              </a>
              <a href="https://www.java.com/es/" target="_blank" title="Java">
                <img
                  className="imgTech"
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                />
              </a>
            </span>
            <span className="separate">
              <a href="https://www.mysql.com/" target="_blank" title="MySQL">
                <img
                  className="imgTech"
                  src="https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png"
                />
              </a>
              <a
                href="https://www.mongodb.com/es"
                target="_blank"
                title="MongoDB"
              >
                <img
                  className="imgTech"
                  src="https://victorroblesweb.es/wp-content/uploads/2016/11/mongodb.png"
                />
              </a>
              <a href="https://git-scm.com/" target="_blank" title="GIT">
                <img
                  className="imgTech"
                  src="https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png"
                />
              </a>
              <a
                href="https://www.atlassian.com/es/software/jira"
                target="_blank"
                title="Jira"
              >
                <img
                  className="imgTech"
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
                />
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default WaveMenu;
