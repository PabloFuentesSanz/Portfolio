import React from "react";
import "./style.css";

function MyExperience() {
  return (
    <section className="cards contenedor">
      <h2 className="titulo">My Experience</h2>
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
          <p class="content">Dec 2021 - Present</p>ç
          <span className="smallText">
            <small>
              Becado en los años 2019 y 2020 por la Universidad Politécnica de
              Madrid para trabajar en el proyecto de desarrollo de una
              aplicación web para la gestión de la información de los alumnos de
              la UPM con PHP, así como trabajar en un proyecto de investigación
              sobre DevOps
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
          <p class="content">Feb 2021 - Dec 2021</p>
          <span className="smallText">
            <small>
              Becado en los años 2019 y 2020 por la Universidad Politécnica de
              Madrid para trabajar en el proyecto de desarrollo de una
              aplicación web para la gestión de la información de los alumnos de
              la UPM con PHP, así como trabajar en un proyecto de investigación
              sobre DevOps
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
            Intern UPM
          </h3>
          <p class="content">2019 - 2020</p>
          <span className="smallText">
            <small>
              Becado en los años 2019 y 2020 por la Universidad Politécnica de
              Madrid para trabajar en el proyecto de desarrollo de una
              aplicación web para la gestión de la información de los alumnos de
              la UPM con PHP, así como trabajar en un proyecto de investigación
              sobre DevOps
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
          <p class="content">Mar. 2017 - Sep. 2017</p>
          <span className="smallText">
            <small>
              Becado en los años 2019 y 2020 por la Universidad Politécnica de
              Madrid para trabajar en el proyecto de desarrollo de una
              aplicación web para la gestión de la información de los alumnos de
              la UPM con PHP, así como trabajar en un proyecto de investigación
              sobre DevOps
            </small>
          </span>
        </article>
      </div>
    </section>
  );
}

export default MyExperience;
