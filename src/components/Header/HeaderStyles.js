import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  h1 {
    font-family: 'Archivo Black', sans-serif;
    color: #f5faf6;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  color: #efe6e3;
  background: transparent;
  padding: 7px 16px;
  border-radius: 16px;
  margin-left: 20px;
  width: 250px;
  border: solid 1px rgb(239, 229, 229, 0.3);
  ::placeholder {
    color: #efe6e3;
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 12px;
  color: #efe6e3;
`;

export const Select = styled.select`
  background: transparent;
  border-radius: 16px;
  padding: 7px 12px;
  border: solid 1px rgb(239, 229, 229, 0.3);
  color: #efe6e3;
  margin-left: 5px;

  option:not(:first-of-type) {
    color: black;
  }
`;

export const FilteOptions = styled.div`
  margin-right: 25px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  padding: 7px 16px;
  border-radius: 16px;
  color: white;
  background: transparent;
  margin-left: 15px;
  margin-right: 0px;
  border: solid 1px rgb(239, 229, 229, 0.3);
`;

export const LoginLink = styled(NavLink)`
  margin-left: -15px;
`;
