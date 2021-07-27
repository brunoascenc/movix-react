import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  height: 75vh;
  z-index: -1;
  margin-bottom: 100px;
  position: relative;

  .swiper-card{
    height: 75vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: top;
    width: 100%;
  }
`

export const Overlay = styled.div`
 position: absolute; 
 top:100px;
 left: 0;
 width: 100%;
 height: 75vh;
`

export const LandingText = styled.div`
  color: white;
  width: 450px;
  margin-left: 10%;
  margin-top: 100px;
`

export const LandingMovieTitle = styled.span`
  font-family: 'Archivo Black', sans-serif;
  font-size: 45px;
  letter-spacing: -2px;
  line-height: 35px;
`

export const LandingInfo = styled.div `
  display: flex;
  margin-top: 10px;
  align-items: center;

  .movie-genres{
    margin-right: 5px;
  }

  .movie-rating{
    display: flex;
    align-items: center;
    margin-left: 5px;

      i{
        margin-top: -5px;
        margin-right: 5px;
      }
  }
`