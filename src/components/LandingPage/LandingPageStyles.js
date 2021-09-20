import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  height: 70vh;

  .swiper-card {
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    position: relative;
    width: 100%;

    .container {
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export const LandingText = styled.div`
  width: 750px;
  margin-top: 100px;

  div {
    display: flex;
    margin-top: -7px;
  }
`;

export const LinkLanding = styled(Link)`
  z-index: 2;
`;

export const LandingMovieTitle = styled.h1`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 52px;
  color: #ffffff;
  font-family: 'Archivo Black', sans-serif;
  font-weight: 900;
  margin-bottom: 7px;
`;
