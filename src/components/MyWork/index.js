import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function MyWork() {
  const { t } = useTranslation();

  const [myRepo, setRepo] = useState([]);
  const repos = [
    'Netflix-Clone-React-Redux',
    'TFG-Voidi-React-NextJs',
    'Tinder-Clone-React',
  ];
  const reposMap = {
    'Netflix-Clone-React-Redux':
      'https://user-images.githubusercontent.com/51823158/138514739-e5730a5b-f691-4013-bd21-65634ae1dddd.png',
    'TFG-Voidi-React-NextJs':
      'https://user-images.githubusercontent.com/51823158/138513108-e70b62f7-ba44-4812-8580-49cecaaf01c9.png',
    'Tinder-Clone-React': './assets/tinder.png',
  };

  const getRepos = async (username) => {
    const repo = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    setRepo(repo.data.filter((repo) => repos.includes(repo.name)));
  };

  useEffect(() => {
    getRepos('PabloFuentesSanz');
  }, []);

  return (
    <section className="galeria">
      <div className="contenedor">
        <h2 className="titulo">{t('Pro')}</h2>
        <article className="galeria-cont">
          <div className="card">
            <a
              href="https://github.com/PabloFuentesSanz/TFG-Voidi-React-NextJs"
              className="linkNoStyle"
              target="_blank"
            >
              <img
                className="imgCard"
                src="https://user-images.githubusercontent.com/51823158/138512851-cf87713f-f73d-409d-aaee-1879cfa5e50d.png"
                alt="Avatar"
              />
            </a>
            <div className="containerCard">
              <p>Voidi TFG</p>
              <span className="smallText">{t('voidi')}</span>
              <br />
              <div className="demo">
                <a href="https://voidi.vercel.app" target="_blank">
                  Demo Online{' '}
                </a>
              </div>
              <a
                href="https://github.com/PabloFuentesSanz/TFG-Voidi-React-NextJs"
                className="linkNoStyle"
                target="_blank"
              >
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
                  className="gitImg"
                />
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/PabloFuentesSanz/PruebaPractica"
              className="linkNoStyle"
              target="_blank"
            >
              <img
                className="imgCard"
                src="https://user-images.githubusercontent.com/51823158/187197723-e32d9cf7-c319-4a17-8384-7e8a9516f1dc.png"
                alt="Avatar"
              />
            </a>
            <div className="containerCard">
              <p>NFT Marketplace </p>
              <span className="smallText">{t('NFT')}</span>
              <br />
              <div className="demo">
                <a href="https://user-images.githubusercontent.com/51823158/187201996-25453ace-53dc-4a99-a207-2f687bcfca9e.mp4" target="_blank">
                  Video Demo Online{' '}
                </a>
              </div>
              <a
                href="https://github.com/PabloFuentesSanz/PruebaPractica"
                className="linkNoStyle"
                target="_blank"
              >
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
                  className="gitImg"
                />
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/PabloFuentesSanz/Netflix-Clone-React-Redux"
              className="linkNoStyle"
              target="_blank"
            >
              <img
                className="imgCard"
                src="https://user-images.githubusercontent.com/51823158/138514739-e5730a5b-f691-4013-bd21-65634ae1dddd.png"
                alt="Avatar"
              />
            </a>
            <div className="containerCard">
              <p>Netflix Clone</p>
              <span className="smallText">{t('net')}</span>
              <a
                href="https://github.com/PabloFuentesSanz/Netflix-Clone-React-Redux"
                className="linkNoStyle"
                target="_blank"
              >
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
                  className="gitImg"
                />
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/PabloFuentesSanz/Tinder-Clone-React"
              target="_blank"
              className="linkNoStyle"
            >
              <img
                className="imgCard"
                src="./assets/tinder2.png"
                alt="Avatar"
              />
            </a>
            <div className="containerCard">
              <p>Tinder Clone</p>
              <span className="smallText">{t('tinder')}</span>
              <a
                href="https://github.com/PabloFuentesSanz/Tinder-Clone-React"
                target="_blank"
                className="linkNoStyle"
              >
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
                  className="gitImg"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="divWave">
        <svg
          viewBox="0 0 450 150"
          preserveAspectRatio="none"
          className="svg-wave"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="path2"
          ></path>
        </svg>
      </div>
    </section>
  );
}
export default MyWork;
