import React from "react";
import "./style.css";

function index() {
  return (
    <>
      <section className="wave-container main">
        <div className="contenedor-textos-main">
          <h2 className="titulo left">About Me</h2>
          <p className="parrafo">
           Hola, soy Pablo Fuentes y soy un ingeniero de Software con una amplia experiencia en el 
           desarrollo de aplicaciones web. Me encanta trabajar en equipo y me gusta aprender nuevas 
           tecnologías. Actualmente me estoy centrando en el desarrollo de aplicaciones con ReactJs 
           y Node, pero también tengo experienta en tecnologías como Angular, Scala, PHP y Java.
          </p>
        </div>
        <img src="./assets/ilustracion1.svg" alt="" />
      </section>
      <section className="info">
        <div className="contenedor">
          <h2 className="titulo left">My Favorite Techs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </>
  );
}

export default index;
