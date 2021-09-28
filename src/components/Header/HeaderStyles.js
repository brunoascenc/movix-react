import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  z-index: 10;
  margin: auto;
  padding: 3% 3%;
  /* display: none; */
`;

export const mobileMenu = styled.div`
  /* display: none; */
`;

export const InputContainer = styled.div`
  position: relative;

  @media (max-width: 885px) {
    width: 100%;
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
  @media (max-width: 885px) {
    right: -5px;
  }
`;

export const Input = styled.input`
  color: #efe6e3;
  background: transparent;
  padding: 7px 16px;
  border-radius: 16px;
  margin-left: 20px;
  width: 250px;
  border: solid 1px rgb(195, 191, 199, 0.1);
  background: ${(props) =>
    props.pageRoute === '/user'
      ? 'rgb(195, 191, 199, 0.1)'
      : 'rgb(195, 191, 199, 0.2)'};
  transition: 0.1s ease;
  ::placeholder {
    color: #e0d9d7;
  }

  &:focus {
    border: solid 1px rgb(195, 191, 199, 0.4);
  }

  @media (max-width: 970px) {
    width: 200px;
  }

  @media (max-width: 885px) {
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 885px) {
    width: 60%;
  }

  h1 {
    font-family: 'Archivo Black', sans-serif;
    color: #f2eeed;
    letter-spacing: 1px;
    margin-top: -3px;

    @media (max-width: 585px) {
      font-size: 25px;
    }
  }

  ${InputContainer} {
    @media (max-width: 600px) {
      display: none;
    }
  }
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
  transition: 0.2s ease;
  margin-left: 8px;
  font-size: 13px;

  @media (max-width: 885px) {
    margin-left: 0;
    margin: 5px;
  }

  option {
    color: black;
  }

  &:hover,
  :focus {
    border: solid 1px rgb(195, 191, 199, 0.4);
  }

  @media (max-width: 885px) {
    width: 100%;
    background: rgb(195, 191, 199, 0.1);
    background-image: url("data:image/svg+xml;utf8,<svg fill='rgba(240, 238, 233)' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 51%;
  }
`;

export const FilteOptions = styled.div`
  margin-right: 25px;
  @media (max-width: 885px) {
    display: flex;
    margin-right: 0;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 380px) {
    width: 75%;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 885px) {
    width: 50%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props) => (props.active ? '0' : '-100%')};
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(11, 9, 13);
    transition: 0.2s ease-in-out;
    overflow: hidden;

    &::after {
      content: '';
      width: 100%;
      height: 600px;
      background: linear-gradient(to top, #17141a, rgb(11, 9, 13));
      z-index: -1;
      position: absolute;
      bottom: -380px;
    }
  }

  @media (max-width: 725px) {
    width: 70%;
  }

  @media (max-width: 545px) {
    width: 100%;
  }

  .search {
    display: none;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      margin-bottom: 15px;
    }

    @media (max-width: 380px) {
      width: 75%;
    }

    input {
      width: 100%;
      background: rgb(195, 191, 199, 0.1);
    }
  }

  ${Input} {
    display: none;
    @media (max-width: 600px) {
      display: block;
      width: 60%;
      margin: 0 auto;
      margin-top: 5px;
    }
  }

  ${SearchButton} {
    @media (max-width: 600px) {
      right: 10px;
      top: 13px;
    }
  }
`;

export const SearchLink = styled(Link)`
  padding: 7px 16px;
  border-radius: 16px;
  color: #575559;
  background: ${(props) => props.theme.whiteBg};
  margin-left: 15px;
  margin-right: 0px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-family: 'Roboto Condensed', sans-serif;
  transition: 0.1s ease;
  &:hover {
    background: #c5c1c9;

    @media (max-width: 885px) {
      background: ${(props) => props.theme.whiteBg};
    }
  }
  @media (max-width: 885px) {
    width: 100%;
    margin-left: 0;
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
`;

export const LoginLink = styled(SearchLink)`
  margin-left: -15px;
  background: ${(props) => props.theme.mainPurple};
  color: #f2eeed;
  &:hover {
    background: #731fb8;
  }

  @media (max-width: 885px) {
    width: 100px;
    margin-left: 0;
    margin-top: 25px;
  }
`;

export const UserLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -10px;
  @media (max-width: 885px) {
    margin-left: 0;
  }
  .profile-link {
    p {
      display: none;
    }
    @media (max-width: 885px) {
      width: 60%;
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 35px;

      p {
        display: block;
        color: #f2eeed;
        margin-left: 10px;
      }
    }
  }
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
  transition: 0.1s ease-in;

  &:hover {
    background: #731fb8;
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

export const MobileMenu = styled.div`
  cursor: pointer;
  display: none;
  @media (max-width: 885px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
  }

  .burger {
    color: #f2eeed;
    font-size: 25px;
  }
`;

export const CloseMenu = styled.div`
  display: none;

  @media (max-width: 885px) {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 15px;
    right: 25px;
    .close {
      font-size: 25px;
    }
  }
`;

export const MenuBackdrop = styled.div`
  @media (max-width: 885px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props) => (props.active ? '0' : '-100%')};
    z-index: 1;
    background: rgb(11, 9, 13, 0.8);
  }
`;

export const SideMenuLogo = styled.div`
  display: none;
  border-bottom: solid 1px rgb(195, 191, 199, 0.6);

  @media (max-width: 885px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 23px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 600px) {
    top: 15%;
  }

  h1 {
    font-family: 'Archivo Black', sans-serif;
    font-size: 28px;
    color: #f2eeed;
  }

  span {
    color: ${(props) => props.theme.textColor};
    font-size: 14px;
  }
`;
