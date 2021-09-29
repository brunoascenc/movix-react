import styled from 'styled-components';

export const ListSection = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3% 0 3%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  span {
    font-size: 11px;
    align-self: flex-end;
    color: #8f8f96;
    margin-right: 12px;
    margin-top: 10px;

    @media (max-width: 425px) {
      font-size: 8px;
    }
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
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;

  .poster-card {
    margin-bottom: 15px;
    position: relative;
    margin-right: 20px;
    height: 260px;
  }

  .poster-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative; */
  }

  &::-webkit-scrollbar {
    height: 6px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(36, 26, 41);
    border-radius: 12px;
  }
  img {
    /* margin-right: 10px; */
    /* margin-bottom: 20px; */
  }
`;

export const Image = styled.img`
  height: 260px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: solid 1px rgb(44, 44, 51, 0.4);
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-weight: 100;
    margin-right: 5px;
    color: #e9f0eb;
    @media (max-width: 425px) {
      display: none;
    }
  }

  span {
    font-size: 11px;
    color: #8f8f96;
    margin-right: 12px;
    margin-top: 2px;
  }
`;

export const Select = styled.select`
  background: #1e1a24;
  border-radius: 16px;
  padding: 6px 9px;
  border: solid 1px rgb(51, 43, 54, 0.2);
  color: #efe6e3;
  transition: 0.1s ease;
  font-size: 12px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const PaginationButton = styled.button`
  pointer-events: ${(props) =>
    props.lastPage || props.firstPage ? 'none' : 'unset'};
  opacity: ${(props) => (props.lastPage || props.firstPage ? '0' : '1')};
  border: none;
  cursor: pointer;
  background: #8d28e0;
  border-radius: 6px;
  padding: 6px;
  transition: 0.1s ease;
  font-size: 14px;
  color: #e1dce6;
  width: 60px;
  &:hover {
    background: #731fb8;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  .next-arrow,
  .prev-arrow {
    font-size: 17px;
    margin-top: 2px;
  }
  .next-arrow {
    margin-left: 3px;
  }
`;
