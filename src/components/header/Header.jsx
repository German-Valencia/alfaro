import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/a1.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Gustavo Adolfo Alfaro</h1>
        <h5 className="text-light">
          Abogado Especialista en Derecho Administrativo
        </h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
