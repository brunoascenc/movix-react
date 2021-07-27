import styled from 'styled-components';

export const HeaderComponent = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  z-index: 10;
`;

export const mobileMenu = styled.div`
  /* display: none; */
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;

`;

export const Input = styled.input`
  background: transparent;
  border: solid 1px #d1cdc0;
  padding: 6px;
  border-radius: 16px;
  margin-left: 20px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 7px;
  right: 10px;
  color: #ffffff;
`;
