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

export const HorizontalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(7, 5, 8, 0.7) 30%, transparent 60%);
  z-index: 1;
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

export const Button = styled.button`
  padding: 8px 16px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  font-size: 13px;
  margin-top: 10px;
  margin-left: ${(props) => (props.secondary ? '12px' : '2px')};
  letter-spacing: 1px;
  cursor: pointer;
  background-image: ${(props) =>
    props.primary
      ? 'linear-gradient(to bottom right,rgb(160, 63, 240),rgba(84, 29, 139, 0.788))'
      : null};
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
