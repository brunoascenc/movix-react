import React from 'react';
import Logo from '../../images/tmdblogo.svg';
import {
  FooterContainer,
  TMDBLogo,
  FooterContent,
  Text,
  TMDBSocials,
  SocialsLinks,
  Copy,
} from './FooterStyles';
import '../../App.css';

const Footer = () => {
  return (
    <FooterContainer className="container">
      <FooterContent>
        <h3>About Movix</h3>
        <Text>
          Movix is ​​a website to discover and search your favorite movies. On
          our website you can save your favorite movies in a list or add them to
          the watchlist.
        </Text>
        <Copy>
          <span>Movix © 2021</span>
          <span>
            Created by{' '}
            <a href="https://brunoascencao.web.app/">Bruno Ascenção</a>
          </span>
        </Copy>
      </FooterContent>
      <TMDBSocials>
        <a href="https://www.themoviedb.org/">
          <TMDBLogo src={Logo} alt="logo" />
        </a>
        <Text>All data and images provided by the TMDB api.</Text>
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
