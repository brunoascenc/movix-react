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
  font-size: 50px;
  letter-spacing: -1px;
  line-height: 49px;
  /* color: #ede7e6; */
  color: #e9f0eb;
`;

export const LandingInfo = styled.div`
  display: flex;
  margin-top: 12px;
  font-size: 13px;
  margin-left: 5px;
  align-items: center;
  color: #b8bfbb;
  color: rgb(217, 204, 204, 0.8);
  .movie-genres {
    margin-right: 5px;
  }

  .movie-rating {
    display: flex;
    align-items: center;
    margin-left: 5px;

    i {
      margin-top: -2px;
      margin-right: 3px;
      font-size: 11px;
    }
  }
`;
