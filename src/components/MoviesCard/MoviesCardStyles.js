import styled from 'styled-components';

export const MovieCard = styled.div``;

export const Image = styled.img`
  height: 260px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
  width: 180px;
`;

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 37px;
`;
