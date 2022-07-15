import React from "react";
import "./style.css";
function Contact() {
  return (
    <footer id="contacto">
      <div className="contenedor">
        <h2 className="titulo">Contact Me</h2>
        <form action="" className="form">
          <div className="row">
            <input
              className="input"
              type="text"
              name=""
              id=""
              placeholder="Nombre"
            />
            <input
              className="input"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <textarea
            className="input"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <input className="input" type="submit" value="Enviar" />
        </form>
        <p className="center">
          <span className="marginR">Telf: +34 638781148</span>
          <span className="marginR">
            Email: pablofuentessanzfuentes@gmail.com
          </span>
          <span className="marginR">
            <a
              href="https://www.linkedin.com/in/pablo-fuentes-512258134/"
              target="_blank"
              className="linkContact"
            >
              <img
                src="https://telecos.upc.edu/es/shared/images/social/logos-rodons/linkedin-circle.png/@@images/a17d006e-5c0d-4004-9fe7-650c7fabd690.png"
                className="linkContact"
              />
              Linkedin
            </a>
          </span>
          <span className="marginR">
            <a
              href="https://github.com/PabloFuentesSanz"
              target="_blank"
              className="linkContact"
            >
              <img
                src="https://cdn2.downdetector.com/static/uploads/logo/github.logo.png"
                className="linkContact"
              />
              Github/PabloFuentesSanz
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Contact;
