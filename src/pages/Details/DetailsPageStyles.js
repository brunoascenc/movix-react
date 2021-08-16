import styled from 'styled-components';

const imageSize = 'https://image.tmdb.org/t/p/original';

export const MovieBanner = styled.div`
  height: 65vh;
  background-image: linear-gradient(rgba(7, 5, 8, 0.5), rgb(7, 5, 8)),
    url(${(props) => imageSize + props.backdrop});
  background-position: top;
  background-size: cover;
  position: relative;
`;

export const ReviewsSection = styled.div`
  margin-top: 100px;
`;
