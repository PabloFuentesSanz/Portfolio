import React, { useRef }  from "react";
import "./style.css";
import emailjs from 'emailjs-com'
import { useTranslation } from "react-i18next";

function Contact() {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cjlq7pg', 'template_hzo0mox', form.current, 'J1SB-vTrUQNkKlJ1i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email enviado correctamente!");
  };

  return (
    <footer id="contacto">
      <div className="contenedor">
       
        <p className="center">
          <span className="marginR"><small>Telf:</small> +34 638781148</span>
          <span className="marginR">
            <small>Email:</small> fuentessanzpablo@gmail.com
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
