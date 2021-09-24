import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  height: 250px;
  min-height: 250px;
  background: rgb(11, 9, 13);
  flex-wrap: wrap;
  margin-top: auto;
  /* display: none; */
  @media (max-width: 535px) {
    height: 400px;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1350px;
  width: 100%;

  @media (max-width: 535px) {
    flex-direction: column;
  }
`;

export const TMDBLogo = styled.img`
  width: 130px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 535px) {
    align-items: center;
  }
  h3 {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  a {
    color: #a9a9b8;
    border-bottom: dotted 1px #5d5d66;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 6px;
  color: ${(props) => props.theme.textColor};
  width: 300px;
  line-height: 21px;
  @media (max-width: 660px) {
    font-size: 14px;
    width: 80%;
  }

  @media (max-width: 535px) {
    width: 300px;
    text-align: center;
  }

  @media (max-width: 345px) {
    width: 90%;
  }
`;

export const Copy = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.8;
  @media (max-width: 535px) {
    align-items: center;
  }
  span {
    margin-bottom: 4px;
  }
`;

export const TMDBSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 535px) {
    margin-bottom: -15px;
  }
  img {
    @media (max-width: 550px) {
      width: 100px;
    }
  }

  ${Text} {
    text-align: center;
    margin-top: 7px;
    margin-bottom: 3px;
    width: 220px;
    @media (max-width: 550px) {
      font-size: 13px;
    }
  }
`;

export const SocialsLinks = styled.div`
  margin-top: 2px;
  display: flex;
  a {
    color: #e1dce6;
    margin: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    padding: 15px;
    border-radius: 50%;
    align-items: center;
    transition: 0.2s ease;
    font-size: 13px;
    background: #0d253f;

    &:hover {
      background: #071524;
    }
  }
`;
