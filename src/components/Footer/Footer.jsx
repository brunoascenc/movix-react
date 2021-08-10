import React from 'react';
import Logo from '../../images/tmdblogo.svg';
import {
  FooterContainer,
  TMDBLogo,
  FooterContent,
  Text,
  TMDBSocials,
  SocialsLinks,
} from './FooterStyles';
import '../../App.css';

const Footer = () => {
  return (
    <FooterContainer className="container">
      <FooterContent>
        <h3>About Movix</h3>
        <Text>
          Search and discover new movies and releases with movix! The data were
          taken from the TMDB api.
        </Text>
        <Text copy>
          <span>Movix</span> © 2021
        </Text>
        <Text copy>
          Created by <a href="https://brunoascencao.web.app/">Bruno Ascenção</a>
        </Text>
      </FooterContent>
      <TMDBSocials>
        <TMDBLogo src={Logo} alt="logo" />
        <SocialsLinks>
          <a href="https://twitter.com/themoviedb">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="https://www.facebook.com/themoviedb">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.themoviedb.org/documentation/api">
            <i className="fas fa-link"></i>
          </a>
        </SocialsLinks>
      </TMDBSocials>
    </FooterContainer>
  );
};

export default Footer;
