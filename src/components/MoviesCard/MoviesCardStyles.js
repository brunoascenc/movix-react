import styled from 'styled-components';

export const MovieCard = styled.div `
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
`

export const Image = styled.img`
    height: 260px;
    border-radius: 16px;
`;

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 37px;
`