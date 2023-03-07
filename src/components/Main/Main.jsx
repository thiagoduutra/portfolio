import React from "react";

import { FiLinkedin, FiBookOpen } from "react-icons/fi";

import "../../styles/partials/main.scss";
import "../../styles/partials/slick.scss";

import curriculo from "../../pdf/ThiagoDutra_curriculo.pdf";

import Css from "../../img/css.png";
import html5 from "../../img/html5.png";
import imgProfile from "../../img/imgProfile.jpeg";
import JavaScript from "../../img/js.png";
import react from "../../img/react.png";
import sass from "../../img/sass.png";
import TypeScript from "../../img/TypeScript.png";

const Main = () => {
  return (
    <main id="home" className="container-main">
      <section className="container-main__content">
        <div className="container-profile">
          <div className="profile-content">
            <h3 className="profile-content__subtitle">Olá, me chamo</h3>
            <h1 className="profile-content__name">Thiago Dutra</h1>
            <p className="profile-content__phrase">Desenvolvedor Front End</p>
          </div>

          <a
            className="btn-linkedin"
            href="https://www.linkedin.com/in/thiago-dutra-107b4a213/"
            target="_blank"
          >
            Linkedin
            <FiLinkedin className="icon-linkedin" color="white" size={18} />
          </a>
        </div>

        <img className="img-profile" src={imgProfile} alt="Image profile" />
      </section>

      <section id="aboutme" className="container-aboutMe">
        <div className="container-aboutMe__desc">
          <h1 className="aboutMe-title">Sobre Mim</h1>
          <p className="aboutMe-description">
            Olá, me chamo Thiago, tenho 25 anos. Sou desenvolvedor Front End.
            Curso Sistemas de Informações no Cefet-RJ, atualmente estou no 6
            período. Estudando há cerca de 8 meses focado em HTML, CSS,
            JavaScript, SASS e iniciando projetos pessoais com React.
            <br />
            <br />
            Amo me desafiar e resolver problemas. Sempre disposto a aprender
            novas tecnologias, a novos desafios e principalmente em aprimorar
            meus conhecimentos.
          </p>
        </div>
        <a
          href={curriculo}
          download="curriculo_thiagoDutra"
          className="btn-curriculo"
        >
          Currículo{" "}
          <FiBookOpen className="icon-Curriculo" color="white" size={18} />{" "}
        </a>
      </section>

      <section id="habilities" className="container-habilities">
        <div className="showHabilities">
          <h1 className="habilities-title">Habilidades</h1>
          <div className="container-tools">
            <ul className="container-imgIcons">
              <li className="background-icons">
                <img
                  className="img-icon"
                  src={html5}
                  alt="Image HTML"
                  title="HTML5"
                />
              </li>
              <li className="background-icons">
                <img
                  className="img-icon"
                  src={Css}
                  alt="Image CSS"
                  title="CSS"
                />
              </li>
              <li className="background-icons">
                <img
                  className="img-icon javascript-icon"
                  src={JavaScript}
                  alt="Image JavaScript"
                  title="JavaScript"
                />
              </li>
              <li className="background-icons">
                <img
                  className="img-icon"
                  src={sass}
                  alt="Image Sass"
                  title="SASS"
                />
              </li>
              <li className="background-icons">
                <img
                  className="img-icon"
                  src={react}
                  alt="Image React"
                  title="React"
                />
              </li>
              <li className="background-icons">
                <img
                  className="img-icon"
                  src={TypeScript}
                  alt="Image TypeScript"
                  title="TypeScript"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
