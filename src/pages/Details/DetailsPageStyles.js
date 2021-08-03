import styled from 'styled-components';

const imageSize = 'https://image.tmdb.org/t/p/original';

export const MovieBanner = styled.div`
  height: 75vh;
  background-image: linear-gradient(rgba(7, 5, 8, 0.3), rgb(7, 5, 8)),
    url(${(props) => imageSize + props.backdrop});
  background-position: top;
  background-size: cover;
  position: relative;
`;

export const HorizontalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
  background: linear-gradient(to right, rgb(7, 5, 8, 0.7) 30%, transparent 65%);
  z-index: -1;
`;
