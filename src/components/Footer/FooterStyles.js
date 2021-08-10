import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  height: 250px;
  background: #0d0d12;
  background: rgb(11, 9, 13);
  justify-content: space-evenly;
  align-items: center;
  background: rgb(11, 9, 13);
`;

export const TMDBLogo = styled.img`
  width: 145px;
`;

export const FooterContent = styled.div`
  h3 {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  a {
    color: #a9a9b8;
    border-bottom: dotted 1px #5d5d66;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => (props.copy ? '12px' : '14px')};
  margin-top: 7px;
  margin-bottom: ${(props) => (props.copy ? '-7px' : '0')};
  color: ${(props) => (props.copy ? '#8f8f96' : '#91919c')};
  width: 300px;
  line-height: 21px;
`;

export const TMDBSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialsLinks = styled.div`
  margin-top: 2px;
  display: flex;
  a {
    color: #91919c;
    margin: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 50%;
    align-items: center;
    border: solid 1px rgb(195, 191, 199, 0.2);
    transition: 0.2s ease;
    font-size: 13px;

    &:hover {
      border: solid 1px rgb(195, 191, 199, 0.4);
    }
  }
`;
