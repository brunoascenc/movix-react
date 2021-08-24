import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  margin-bottom: 70px;
  display: ${(props) => (props.moviesLength === 0 ? 'none' : 'block')};
`;
