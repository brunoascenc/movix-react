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

  .landing-txt{
    width: 100%;
    margin-left: 25%;
  }
`

export const Overlay = styled.div`
 position: absolute; 
 top:100px;
 left: 0;
 width: 100%;
 height: 75vh;
`