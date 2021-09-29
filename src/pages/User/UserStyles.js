import styled from 'styled-components';

export const UserSection = styled.section``;

export const UserHeader = styled.div`
  position: relative;
  height: 400px;
  background: rgb(11, 9, 13);
  display: flex;
  align-items: center;
  padding: 0 3% 0 3%;
  overflow: hidden;
  background: linear-gradient(to right, #110e14, rgb(7, 5, 8));
`;

export const UserIconBg = styled.div`
  position: absolute;
  left: -690px;
  top: 0;
  background: linear-gradient(to bottom, #8d28e0, #1e1d1f);
  width: 1000px;
  height: 600px;
  transform: rotate(45deg);
  z-index: 1;

  @media (max-width: 768px) {
    transform: rotate(0);
    background: linear-gradient(to bottom, #8d28e0, #701bb5);
    left: 0;
    width: 100%;
    height: 140px;
  }
`;

export const UserInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 550px) {
    padding: 0 3% 0 3%;
  }

  .username-skeleton {
    width: 400px;
    height: 42px;
    background: transparent;
    margin-bottom: 15px;
  }
`;

export const UserIcon = styled.span`
  text-transform: uppercase;
  background: ${(props) => props.theme.mainPurple};
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  border-radius: 50%;
  color: #f2eeed;
  z-index: 1;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 70px;
    margin-bottom: 10px;
  }
`;

export const Username = styled.p`
  font-size: 35px;
  margin-bottom: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 26px;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  align-items: center;
  border-right: solid 1px #271e2e;
  padding: 0 45px 0 45px;

  @media (max-width: 525px) {
    padding: 0 25px 0 25px;
  }

  @media (max-width: 300px) {
    padding: 0 15px 0 15px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-size: 22px;
    background: transparent;
    border: solid 3px #a960e6;
    border-radius: 50%;

    @media (max-width: 460px) {
      width: 40px;
      height: 40px;
      font-size: 16px;
      border: solid 2px #a960e6;
    }
  }
  p {
    width: 50px;
    margin-left: 10px;
    font-size: 15px;
    @media (max-width: 460px) {
      font-size: 14px;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  ${ListInfo}:first-child {
    padding-left: 0;
    @media (max-width: 525px) {
      padding-left: 23px;
    }

    @media (max-width: 300px) {
      padding-left: 19px;
    }
  }

  ${ListInfo}:last-child {
    @media (max-width: 525px) {
      border: none;
    }
  }

  @media (max-width: 525px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 525px) {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
  }

  .separator {
    width: 1px;
    height: 40px;
    background: #271e2e;
  }

  a {
    background: #e7e4eb;
    font-size: 15px;
    padding: 6px 16px;
    border-radius: 16px;
    color: #575559;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export const ListContainer = styled.div`
  height: 100vh;
  margin-bottom: 150px;
`;

export const UserHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3% 0 3%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
