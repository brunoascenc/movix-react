import styled from 'styled-components';

export const Modal = styled.div`
  position: relative;
`;

export const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 7px 16px;
  width: unset;
  background: transparent;
  border-radius: 0;
  border: none;
  margin-left: 2px;
  color: #dadbe0;
  font-size: 15px;
  letter-spacing: 0;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;

  .trailer-icon {
    font-size: 25px;
    margin-right: 2px;
  }

  &:hover {
    opacity: 1;
  }
`;
