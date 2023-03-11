import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiTiktok} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/gustavoadolfo.alfarotascon/" target="_blank" rel="noreferrer"><BsFacebook/></a>
      <a href="https://www.instagram.com/_galfaro_/" target="_blank" rel="noreferrer"><BsInstagram/></a>
      <a href="https://tiktok.com/@_gustavo_alfaro" target="_blank" rel="noreferrer"><SiTiktok/></a>
    </div>
  );
};

export default HeaderSocials;
