import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  height: 75vh;
  /* z-index: -1; */
  margin-bottom: 100px;
  position: relative;

  .swiper-card {
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: top;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 75vh;
`;

export const LandingText = styled.div`
  color: white;
  width: 450px;
  margin-left: 10%;
  margin-top: 100px;

  .txt-align{
      display: flex;
  flex-direction: column;
  }

  button{
    padding: 8px 16px;
    width: 100px;
    display: flex;
    justify-content: center;
    border-radius: 16px;
    color: white;
    border: none;
    font-size: 13px;
    background: rgb(158, 61, 238);
    margin-top: 10px;
    margin-left: 2px;
    letter-spacing: 1px;
    cursor: pointer;
    background-image: linear-gradient(
      to bottom right,
      rgb(160, 63, 240),
      rgba(84, 29, 139, 0.788)
    );
  }
`;

export const LandingMovieTitle = styled.span`
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
