import React from "react";
import "./about.css";
import ME from "../../assets/a41.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conoce</h5>
      <h2>Mi Trayectoria</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Ejerciendo desde 2017</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>100+ Nacionales</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>50+ Municipales</small>
            </article>
          </div>
          <p>
            He tenido la oportunidad de desarrollar mi carrera tanto en el
            sector público como privado, con la frente en alto puedo decir que
            mi ejercicio lo he desempeñado con total transparencia.
          </p>
          <a href="#contact" className="btn btn-primary">
            Asesorías
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
