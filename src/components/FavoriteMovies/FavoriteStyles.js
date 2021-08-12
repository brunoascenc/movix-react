import styled from 'styled-components';

export const FavoriteSection = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 11px;
    align-self: flex-end;
    color: #8f8f96;
    margin-right: 12px;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  color: #5c5a5e;
  font-size: 11px;
  height: 20px;
  margin-bottom: 25px;
  background: none;
  border: none;
  align-self: center;
  cursor: pointer;
  transition: 0.1s ease;
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-left: -15px;
  justify-self: center;

  &:hover {
    color: #e9f0eb;

    .delete-icon {
      color: #e9f0eb;
    }
  }

  .delete-icon {
    font-size: 18px;
    color: #291e2e;
  }
`;

export const FavoriteContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  .poster-card {
    margin-bottom: 15px;
  }

  .poster-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-right: 15px;
    /* margin-bottom: 20px; */
  }

  &::-webkit-scrollbar {
    height: 4px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(36, 26, 41);
    border-radius: 12px;
  }
`;

export const ListCard = styled.div``;

export const FavoriteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-weight: 100;
    margin-right: 5px;
    color: #e9f0eb;
  }
`;

export const Select = styled.select`
  background: rgb(15, 12, 18);
  border-radius: 16px;
  padding: 6px 9px;
  border: solid 1px rgb(51, 43, 54, 0.2);
  color: #efe6e3;
  transition: 0.1s ease;
  font-size: 12px;
`;
