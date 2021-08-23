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
    color: #f2eeed;
    letter-spacing: 1px;
    margin-top: -3px;
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
  border: solid 1px rgb(195, 191, 199, 0.1);
  /* background: rgb(195, 191, 199, 0.2); */
  background: ${(props) =>
    props.pageRoute === '/user'
      ? 'rgb(195, 191, 199, 0.1)'
      : 'rgb(195, 191, 199, 0.2)'};
  transition: 0.1s ease;
  ::placeholder {
    color: #e0d9d7;
  }

  &:focus {
    border: solid 1px rgb(195, 191, 199, 0.7);
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
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border-radius: 16px;
  padding: 7px 22px 7px 10px;
  border: solid 1px rgb(195, 191, 199, 0.1);
  /* background: rgb(195, 191, 199, 0.2); */
  background: ${(props) =>
    props.pageRoute === '/user'
      ? 'rgb(195, 191, 199, 0.1)'
      : 'rgb(195, 191, 199, 0.2)'};
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgba(240, 238, 233)' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 51%;
  color: #efe6e3;
  transition: 0.1s ease;
  margin-left: 8px;
  font-size: 13px;

  option:not(:first-of-type) {
    color: black;
  }

  &:hover,
  :focus {
    border: solid 1px rgb(195, 191, 199, 0.8);
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
  color: #575559;
  background: ${(props) => props.theme.whiteBg};
  margin-left: 15px;
  margin-right: 0px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const LoginLink = styled(NavLink)`
  margin-left: -15px;
  background: ${(props) => props.theme.mainPurple};
  color: #f2eeed;
`;

export const UserLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 22px; */
  margin-left: -10px;
`;

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #f2eeed;
  text-transform: uppercase;
  background: ${(props) => props.theme.mainPurple};
  width: 33px;
  height: 33px;
  font-size: 20px;
  border: solid 1px rgb(195, 191, 199, 0);
  transition: 0.1s ease;

  &:hover {
    border: solid 1px rgb(195, 191, 199, 0.4);
  }
`;

export const LogoutLink = styled.div`
  color: #b6bbc2;
  font-size: 13px;
  margin-top: 5px;
  transition: 0.1s ease;

  &:hover {
    color: #e1dce6;
  }
`;
