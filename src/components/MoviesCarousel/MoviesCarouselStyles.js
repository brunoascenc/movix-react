import styled from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: 120px;
  /* max-width: 1400px;
  width: 100%; */
  /* padding: 0 3% 0 3%; */
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
