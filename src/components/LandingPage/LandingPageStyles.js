import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  height: 75vh;

  .swiper-card {
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center top;
    position: relative;
    width: 100%;
  }
`;

export const LandingText = styled.div`
  color: white;
  width: 750px;
  margin-left: 5%;
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
  /* color: #ede7e6; */
  color: #e7e4eb;
  font-family: 'Archivo Black', sans-serif;
  margin-bottom: 7px;
`;
