import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

function MyExperience() {
  const { t } = useTranslation();

  return (
    <section className="cards contenedor">
      <h2 className="titulo">{t('Expe')}</h2>
      <div className="content-cards">
      <article className="card cardExp">
          <i className="far fa-clone"></i>
          <h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png"
              className="logoCompany"
            />{' '}
            Alten Delivery Center - Inditex
          </h3>
          <p className="content">{t('curr')}</p>
          <span className="smallText">
            <small>
              {t('alten3')}
              <br />
              <br />
              <b>{t('techsN')}</b> React, TypeScript, Amiga (Inditex Framework), CI/CD, Jest 
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <i className="far fa-clone"></i>
          <h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png"
              className="logoCompany"
            />{' '}
            Alten Delivery Center - Publicis
          </h3>
          <p className="content">{t('curr')}</p>
          <span className="smallText">
            <small>
              {t('alten2')}
              <br />
              <br />
              <b>{t('techsN')}</b> React, Redux, NextJS, Tailwind, MUI, Azure DevOps, Jest 
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <i className="far fa-clone"></i>
          <h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png"
              className="logoCompany"
            />{' '}
            Alten Delivery Center - Macq
          </h3>
          <p className="content">{t('dec')}</p>
          <span className="smallText">
            <small>
              {t('alten1')}
              <br />
              <br />
              <b>{t('techsN')}</b> Angular, TypeScript, Scala, Unit test Back
              (Play, Mockito) - Front (Jasmine, TestBed), MongoDB, Jira,
              Jenkins, BitBucket, Confluence.
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <i className="fas fa-database"></i>
          <h3>
            <img
              src="./assets/zalcu.png"
              className="logoCompany"
            />
            Zalcu
          </h3>
          <p className="content">{t('feb')}</p>
          <span className="smallText">
            <small>
              {t('zalcu1')}
              <br />
              <br />
              <b>{t('techsN')}</b> React, NodeJS, Python, PHP, MongoDB,
              MySQL,Linux, Git, AmazonWebServices
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <i className="fas fa-database"></i>
          <h3>
            <img
              src="./assets/upm.png"
              className="logoCompany"
            />{' '}
            {t('intern')}
          </h3>
          <p className="content">2019 - 2020</p>
          <span className="smallText">
            <small>
              {t('upm1')} <b>PHP</b>, {t('upm2')} <b>DevOps</b>.
            </small>
          </span>
        </article>
        <article className="card cardExp">
          <i className="far fa-object-group"></i>
          <h3>
            <img
              src="./assets/accenture.png"
              className="logoCompany"
            />{' '}
            Accenture
          </h3>
          <p className="content">2017</p>
          <span className="smallText">
            <small>
              {t('acc')}
              <br />
              <br />
              <b>{t('techsN')}</b> Java, JUnit, PLSQL
            </small>
          </span>
        </article>
      </div>
    </section>
  );
}

export default MyExperience;
