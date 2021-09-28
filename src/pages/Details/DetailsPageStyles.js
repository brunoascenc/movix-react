import styled from 'styled-components';

const imageSize = 'https://image.tmdb.org/t/p/original';

export const DetailsSection = styled.section`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 3% 3%;
`;

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
