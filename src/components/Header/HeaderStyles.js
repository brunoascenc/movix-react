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

  h1{
    font-family: 'Archivo Black', sans-serif;
    color: #f5faf6;
  }
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
  width: 250px;
  border: solid 2px #f5faf6;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 7px;
  right: 8px;
  color: #ffffff;
`;


export const Select = styled.select`
  background: transparent;
  border-radius: 16px;
  padding: 6px;
  border: solid 2px #f5faf6;
  color: #f5faf6;
  margin-left: 5px;

  option:not(:first-of-type) {
  color: black;
}
`

export const FilteOptions = styled.div`
  margin-right: 25px;
  .filter-btn{
    padding: 6px;
    border-radius: 16px;
    color: white;
    background: rgb(158, 61, 238);
    margin-left: 5px;
  }

`

export const Form = styled.form`
  display: flex;
  align-items: center;
  a{
    color: white;
  }
`