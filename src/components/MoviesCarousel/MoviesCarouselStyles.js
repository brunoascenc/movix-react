import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 70px;
  max-width: 1920px;
  width: 100%;

  display: ${(props) => (props.moviesLength === 0 ? 'none' : 'block')};
`;
