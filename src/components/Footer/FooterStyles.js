import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  height: 250px;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(11, 9, 13);
  flex-wrap: wrap;
`;

export const TMDBLogo = styled.img`
  width: 130px;
`;

export const FooterContent = styled.div`
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
  color: #91919c;
  width: 300px;
  line-height: 21px;
`;

export const Copy = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #8f8f96;
  span {
    margin-bottom: 4px;
  }
`;

export const TMDBSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Text} {
    text-align: center;
    margin-top: 7px;
    margin-bottom: 3px;
    width: 220px;
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
    border: solid 1px rgb(195, 191, 199, 0);
    transition: 0.2s ease;
    font-size: 13px;
    /* background: #8d28e0; */
    background: #0d253f;

    &:hover {
      border: solid 1px rgb(195, 191, 199, 0.4);
    }
  }
`;
