import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiTiktok} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
      <a href="https://tiktok.com" target="_blank" rel="noreferrer"><SiTiktok/></a>
    </div>
  );
};

export default HeaderSocials;
