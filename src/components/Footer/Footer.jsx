import React from "react";
import Logo from "../../images/tmdblogo.svg";
import {FooterContainer} from './FooterStyles';
import "../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <span>Movix</span> © 2021
      </p>
      <div className="socials">
        <img src={Logo} alt="logo" />
        <a href="https://twitter.com/themoviedb">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://www.facebook.com/themoviedb">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.themoviedb.org/documentation/api">
          <i className="fas fa-link"></i>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
