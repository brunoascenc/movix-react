import styled from 'styled-components';

export const FavoriteSection = styled.div`
  margin-top: 150px;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  img {
    margin-right: 15px;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar {
    height: 6px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(36, 26, 41);
    border-radius: 12px;
  }
`;

export const ListCard = styled.div``;
