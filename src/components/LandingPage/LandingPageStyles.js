import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  height: 75vh;
  margin-bottom: 100px;
  /* position: relative; */

  .swiper-card {
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: top;
    position: relative;
    width: 100%;
  }
`;

export const LandingText = styled.div`
  color: white;
  width: 600px;
  margin-left: 5%;
  margin-top: 100px;
  div {
    display: flex;
  }
`;

export const LinkLanding = styled(Link)`
  z-index: 2;
`;

export const LandingMovieTitle = styled.h1`
  font-family: 'Archivo Black', sans-serif;
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 45px;
  color: #edeff2;
`;

export const LandingInfo = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 3px;
  align-items: center;
  color: #ced1d6;
  .movie-genres {
    margin-right: 5px;
  }

  .movie-rating {
    display: flex;
    align-items: center;
    margin-left: 5px;

    i {
      margin-top: -5px;
      margin-right: 5px;
    }
  }
`;
