import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/b1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Abogado</h5>
        <h1>Gustavo Alfaro</h1>
        <h5 className="text-light">
          Especialista en Derecho Administrativo
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Ir al final
        </a>
      </div>
    </header>
  );
};

export default Header;
