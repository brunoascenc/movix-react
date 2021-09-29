import styled from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: 100px;
  display: ${(props) => (props.moviesLength === 0 ? 'none' : 'block')};

  @media (max-width: 680px) {
    margin-bottom: 65px;
  }
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
