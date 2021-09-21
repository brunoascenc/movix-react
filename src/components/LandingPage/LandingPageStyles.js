import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';

export const LandingPageContainer = styled.div`
  height: 75vh;

  @media (max-width: 885px) {
    height: 60vh;
  }

  @media (max-width: 600px) {
    height: 50vh;
  }

  @media (max-width: 500px) {
    height: 45vh;
  }

  @media (max-width: 380px) {
    height: 40vh;
  }

  .swiper-card {
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    position: relative;
    width: 100%;

    @media (max-width: 885px) {
      height: 60vh;
    }

    @media (max-width: 600px) {
      height: 50vh;
      background-position: center;
    }

    @media (max-width: 500px) {
      height: 45vh;
    }

    @media (max-width: 380px) {
      height: 40vh;
    }

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

  @media (max-width: 415px) {
    width: 80%;
  }

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

  @media (max-width: 650px) {
    font-size: 40px;
    line-height: 32px;
  }

  @media (max-width: 525px) {
    font-size: 35px;
  }

  @media (max-width: 415px) {
    font-size: 30px;
  }
`;

export const Buttons = styled(CustomButton)`
  @media (max-width: 525px) {
    font-size: 15px;
    width: 80px;
  }
`;
