import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        ALFARO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Inicio</a>
        </li>
        <li>
          <a href="#about">Trayectoria</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#services">Administrativo</a>
        </li>
        <li>
          <a href="#portfolio">Noticias</a>
        </li>
        <li>
          <a href="#testimonials">Testimonios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/gustavoadolfo.alfarotascon/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/_abgalfaro_/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com/AlfaroTascon">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          {" "}
          <a
            href="https://antsoftdesign.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            &copy; ANT SoftDesign. All rigths reserved.
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
