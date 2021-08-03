import styled from 'styled-components';

const imageSize = 'https://image.tmdb.org/t/p/original';

export const MovieBanner = styled.div`
  height: 70vh;
  background-image: linear-gradient(rgba(7, 5, 8, 0.3), rgb(7, 5, 8)),
    url(${(props) => imageSize + props.backdrop});
  background-position: top;
  background-size: cover;
  position: relative;
`;

export const HorizontalOverlay = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh; */
  /* background: linear-gradient(to right, rgb(7, 5, 8, 0.7) 30%, transparent 65%); */
  /* z-index: -1; */
`;

export const SimilarContainer = styled.div`
  /* position: absolute */
  position: relative;

  .left-arrow,
  .right-arrow {
    cursor: pointer;
    font-size: 18px;
    color: #e0d2d1;
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 15px;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 21px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
`;

export const ReviewsSection = styled.div`
  margin-top: 100px;
`;

export const ReviewsContainer = styled.div`
  border: solid 1px rgb(44, 44, 51, 0.4);
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 150px;
  height: 500px;
  overflow-y: scroll;
  scrollbar-color: rgb(160, 63, 240) rgba(26, 23, 31, 0.363);
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  h1 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    color: rgb(238, 225, 248);
  }
  p {
    margin-bottom: 1.2rem;
    color: grey;
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
    width: 10px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(26, 23, 31, 0.952);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(160, 63, 240);
    border-radius: 12px;
  }
`;
