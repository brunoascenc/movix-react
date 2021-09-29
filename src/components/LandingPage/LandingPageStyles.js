import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';

export const LandingPageContainer = styled.div`
  height: 75vh;

  .swiper {
    height: 100%;
  }

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 885px) {
    height: 450px;
  }

  @media (max-width: 575px) {
    height: 400px;
  }

  @media (max-width: 515px) {
    height: 335px;
  }

  @media (max-width: 415px) {
    height: 300px;
  }

  @media (max-width: 350px) {
    height: 285px;
  }

  @media (max-width: 319px) {
    height: 240px;
  }

  .swiper-card {
    height: 100%;
    display: flex;
    align-items: center;
    background-size: cover;
    position: relative;
    width: 100%;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(7, 5, 8, 0.2), rgb(7, 5, 8));
    }

    @media (max-width: 1024px) {
      background-position: center;
    }
  }
`;

export const LandingText = styled.div`
  width: 750px;
  margin-top: 100px;

  @media (max-width: 845px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
  @media (max-width: 485px) {
    width: 100%;
  }

  div {
    display: flex;
    margin-top: -7px;
  }
`;

export const LinkLanding = styled(Link)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  padding: 0 3% 0 3%;
`;

export const LandingMovieTitle = styled.h1`
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 52px;
  color: #ffffff;
  font-family: 'Archivo Black', sans-serif;
  font-weight: 900;
  margin-bottom: 7px;

  @media (max-width: 845px) {
    font-size: 40px;
    line-height: 40px;
  }

  @media (max-width: 760px) {
    font-size: 32px;
    line-height: 35px;
  }

  @media (max-width: 485px) {
    font-size: 27px;
    line-height: 30px;
  }

  @media (max-width: 380px) {
    font-size: 24px;
    line-height: 26px;
  }

  @media (max-width: 319px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Buttons = styled(CustomButton)`
  @media (max-width: 525px) {
    font-size: 15px;
    width: 80px;
  }
`;
