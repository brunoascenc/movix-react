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
  padding: 7px 16px;
  border-radius: 16px;
  margin-left: 20px;
  width: 250px;
  border: solid 1px rgb(239, 229, 229, 0.3);
  ::placeholder {
    color: #EFE6E3;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 12px;
  color: #EFE6E3;
`;


export const Select = styled.select`
  background: #EFE6E3;
  background: transparent;
  border-radius: 16px;
  padding: 6px;
  padding: 7px 12px;
  border: solid 1px rgb(239, 229, 229, 0.3);
  color: #0D0D0D;
  color: #EFE6E3;
  margin-left: 5px;

  option:not(:first-of-type) {
  color: black;
}
`

export const FilteOptions = styled.div`
  margin-right: 25px;
  .filter-btn{
    padding: 7px 16px;
    border-radius: 16px;
    color: white;
    background: rgb(158, 61, 238);
    margin-left: 10px;
    margin-right: -10px;
    border: none;
    background-image: linear-gradient(
      to bottom right,
      rgb(160, 63, 240),
      rgba(84, 29, 139, 0.788)
    );
  }

`

export const Form = styled.form`
  display: flex;
  align-items: center;
  a{
    color: #EFE6E3;
    letter-spacing: 1px;
    padding: 6px 16px;
    border-radius: 16px;
    background: transparent;
    border: solid 1px rgb(239, 229, 229, 0.3);
  }
`