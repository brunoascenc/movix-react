import styled from 'styled-components';

// export const MovieCard = styled.div``;

// export const Image = styled.img`
//   height: 290px;
//   border-radius: 12px;
//   border: solid 1px rgb(44, 44, 51, 0.4);
//   width: 175px;
// `;

export const MovieCardContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 57px;
  width: 100%; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-gap: 40px;
  grid-row-gap: 50px;
  /* img {
    width: 230px;
    height: 350px;
  } */
`;
