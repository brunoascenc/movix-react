import styled from 'styled-components';

export const WatchlistSection = styled.div`
  margin-top: 80px;
`;

export const WatchlistContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-bottom: 100px;
  &::-webkit-scrollbar {
    height: 6px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(36, 26, 41);
    border-radius: 12px;
  }
  img {
    margin-right: 15px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  height: 260px;
  border-radius: 12px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: solid 1px rgb(44, 44, 51, 0.4);
`;

export const ListCard = styled.div``;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
`;
