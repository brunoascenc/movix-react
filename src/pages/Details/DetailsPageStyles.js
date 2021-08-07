import styled from 'styled-components';

const imageSize = 'https://image.tmdb.org/t/p/original';

export const MovieBanner = styled.div`
  height: 70vh;
  background-image: linear-gradient(rgba(7, 5, 8, 0.5), rgb(7, 5, 8)),
    url(${(props) => imageSize + props.backdrop});
  background-position: top;
  background-size: cover;
  position: relative;
`;

export const ReviewsSection = styled.div`
  margin-top: 100px;
`;

export const ReviewsContainer = styled.div`
  border: solid 1px rgb(44, 44, 51, 0.1);
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 150px;
  height: 500px;
  overflow-y: scroll;
  scrollbar-color: rgb(160, 63, 240) rgba(26, 23, 31, 0.363);
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  background: #0a080d;

  h1 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    color: rgb(238, 225, 248);
  }
  p {
    margin-bottom: 1.2rem;
    color: #999a9e;
    line-height: 23px;
  }
  a {
    @include btnStyle();
    padding: 0.5rem 2rem;
    margin-top: 5rem;
    border-radius: 6px;
  }

  div {
    margin-top: 0rem;
    padding: 2rem 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    /* background: rgba(26, 23, 31, 0.952); */
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(36, 26, 41);
    border-radius: 9px;
  }
`;
