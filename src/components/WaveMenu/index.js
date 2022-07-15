import React from "react";
import "./style.css";

function index() {
  return (
    <>
      <section className="wave-container main">
        <div className="contenedor-textos-main">
          <h2 className="titulo left">About Me</h2>
          <p className="parrafo">
            Hola, soy Pablo Fuentes y soy un ingeniero de Software con una
            amplia experiencia en el desarrollo de aplicaciones web. <br/><br/>Soy un apasionado de la tecnología y la programación, y me encanta
            pasar parte de mi tiempo libre aprendiendo, mejorando y poniendome al día en temas de desarrollo. 
            <br/><br/>
            Actualmente estoy trabajando como desarrollador FullStack con Angular y Scala, pero  estoy ampliando mis conocimientos en el desarrollo de aplicaciones con
            React y Redux, tecnologías que me apasionan.
          </p>
          <a className="linkPr" href="./assets/cvPablo.pdf" download="PabloFuentesCV.pdf"><p><img src="https://www.casascarpinteria.com/wp-content/uploads/2021/02/Icono-Descargar.png" className="imgDow"/>Descarga aquí mi CV</p></a>
          <small>- Este Portfolio se ha desarrollado con React y publicado en Vercel a través de un despliegue continuo desde su <a className="linkPr" href="https://github.com/PabloFuentesSanz/Portfolio" target="_blank">repositorio de Git</a>.</small>
        </div>
        <img src="./assets/ilustracion1.svg" alt="" />
      </section>
      <section className="info">
        <div className="contenedor">
          <h2 className="titulo left">My Favorite Techs</h2>
          <div className="imgsTechs">
            <span className="separate">
              <a href="https://es.reactjs.org/" target="_blank" title="React"><img
                className="imgTech"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              /></a>
              <a href="https://angular.io/" target="_blank" title="Angular"><img
                className="imgTech"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
              /></a>
              <a href="https://www.typescriptlang.org/" target="_blank" title="TypeScript"><img
                className="imgTech"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
              /></a>
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" title="JavaScript"><img
                className="imgTech"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              /></a>
              <a href="https://sass-lang.com/" target="_blank" title="Sass"><img
                className="imgTech"
                src="https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png"
              /></a>
            </span>
            <span className="separate">
              <a href="https://nodejs.org/es/" target="_blank" title="NodeJs"><img
                className="imgTech"
                src="https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png"
              /></a>
              <a href="https://nextjs.org/" target="_blank" title="NextJs"><img
                className="imgTech"
                src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
              /></a>
              <a href="https://www.scala-lang.org/" target="_blank" title="Scala"><img
                className="imgTech"
                src="https://cdn-icons-png.flaticon.com/512/919/919834.png"
              /></a>
              <a href="https://www.php.net/manual/es/intro-whatis.php" target="_blank" title="PHP"><img
                className="imgTech"
                src="https://itblog.ldlnet.net/wp-content/uploads/2021/06/PHP-logo.png"
              /></a>
              <a href="https://www.java.com/es/" target="_blank" title="Java"><img
                className="imgTech"
                src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
              /></a>
            </span>
            <span className="separate">
              <a href="https://www.mysql.com/" target="_blank" title="MySQL"><img
                className="imgTech"
                src="https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png"
              /></a>
              <a href="https://www.mongodb.com/es" target="_blank" title="MongoDB"><img
                className="imgTech"
                src="https://victorroblesweb.es/wp-content/uploads/2016/11/mongodb.png"
              /></a>
              <a href="https://firebase.google.com/" target="_blank" title="Firebase"><img
                className="imgTech"
                src="https://i1.wp.com/www.clubdetecnologia.net/wp-content/uploads/2017/11/firebase-logo.png?fit=180%2C180&ssl=1"
              /></a>
              <a href="https://www.postgresql.org/" target="_blank" title="PostgreSQL"><img
                className="imgTech"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
              /></a>
            </span>

            <span className="separate">
              <a href="https://git-scm.com/" target="_blank" title="GIT"><img
                className="imgTech"
                src="https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png"
              /></a>
              <a href="https://www.linux.org/" target="_blank" title="Linux"><img
                className="imgTech"
                src="https://cdn-icons-png.flaticon.com/512/518/518713.png"
              /></a>
              <a href="https://www.atlassian.com/es/software/jira" target="_blank" title="Jira"><img
                className="imgTech"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
              /></a>
              <a href="https://www.jenkins.io/" target="_blank" title="Jenkins"><img
                className="imgTech"
                src="https://wiki.jenkins.io/JENKINS/attachments/2916393/57409617.png"
              /></a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
