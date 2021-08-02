import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  height: 250px;
  background: #0d0d12;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 100px; */
`;

export const TMDBLogo = styled.img`
  width: 150px;
`;

export const FooterContent = styled.div`
  a {
    color: #a9a9b8;
    border-bottom: dotted 1px #5d5d66;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 7px;
  color: #91919c;
`;

export const TMDBSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialsLinks = styled.div`
  a {
    color: #91919c;
    margin: 5px;
  }
`;
