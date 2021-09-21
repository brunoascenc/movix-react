import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 70px;
  max-width: 1920px;
  width: 100%;
  min-height: 100%;
  display: ${(props) => (props.moviesLength === 0 ? 'none' : 'block')};
`;

export const CarouselTitle = styled.h2`
  margin-bottom: 15px;
  position: absolute;
  top: -40px;
  z-index: 1;
  @media (max-width: 885px) {
    font-size: 18px;
    top: -26px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
    top: -17px;
  }
`;
