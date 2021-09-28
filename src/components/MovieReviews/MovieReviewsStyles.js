import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  border: solid 1px rgb(44, 44, 51, 0.1);
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 150px;
  height: ${(props) => (props.reviewsLength >= 3 ? '500px' : '350px')};
  overflow-y: scroll;
  scrollbar-color: rgb(160, 63, 240) rgba(26, 23, 31, 0.363);
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  background: rgb(11, 9, 13);

  @media (max-width: 750px) {
    padding: 16px;
  }

  @media (max-width: 575px) {
    height: ${(props) => (props.reviewsLength >= 3 ? '385px' : '300px')};
  }

  @media (max-width: 435px) {
    padding: 6px;
  }

  h1 {
    margin-bottom: 1rem;
  }
  span {
    font-weight: 400;
    font-size: 14px;
  }
  p {
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.textColor};
    line-height: 23px;
    @media (max-width: 750px) {
      text-align: center;
    }

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 20px;
    }
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
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
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

export const ReviewsSection = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: ${(props) => (props.reviewsLength === 0 ? 'none' : 'block')};
  margin-top: 100px;
`;
