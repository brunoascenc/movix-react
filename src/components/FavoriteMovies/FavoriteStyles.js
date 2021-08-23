import styled from 'styled-components';

export const FavoriteSection = styled.div`
  margin-top: 50px;
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
  margin-bottom: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 6px;
  top: 10px;

  .delete-icon {
    font-size: 35px;
    color: #e1dce6;
    background: #8d28e0;
    padding: 8px;
    border-radius: 6px;
    &:hover {
      background: #731fb8;
      color: #ece9f0;
    }
  }
`;

export const FavoriteContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;

  .poster-card {
    margin-bottom: 15px;
    position: relative;
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
    height: 6px;
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
  background: #1e1a24;
  border-radius: 16px;
  padding: 6px 9px;
  border: solid 1px rgb(51, 43, 54, 0.2);
  color: #efe6e3;
  transition: 0.1s ease;
  font-size: 14px;
`;
