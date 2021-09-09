import styled from 'styled-components';

export const UserHeader = styled.div`
  position: relative;
  height: 45vh;
  background: rgb(11, 9, 13);
  display: flex;
  align-items: center;
  /* margin-top: 100px; */
  padding-left: 3%;
  overflow: hidden;
  background: linear-gradient(to right, #110e14, rgb(7, 5, 8));
  .user-icon {
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
  }
`;

export const UserIconBg = styled.div`
  position: absolute;
  left: -670px;
  top: 0;
  background: linear-gradient(to bottom, #8d28e0, #1e1d1f);
  width: 1000px;
  height: 600px;
  transform: rotate(45deg);
  z-index: 1;
`;

export const UserInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  .username {
    font-size: 35px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .username-skeleton {
    width: 400px;
    height: 42px;
    background: transparent;
    margin-bottom: 15px;
  }

  .info-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 480px;

    .separator {
      width: 1px;
      height: 40px;
      background: #271e2e;
    }
    .list-info {
      display: flex;
      align-items: center;
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
      }
      p {
        width: 50px;
        margin-left: 15px;
        font-size: 18px;
        font-weight: 100;
        margin-top: 15px;
      }
    }

    a {
      background: #e7e4eb;
      font-size: 15px;
      padding: 6px 16px;
      border-radius: 16px;
      margin-left: -20px;
      color: #575559;
      font-family: 'Roboto Condensed', sans-serif;
    }
  }
`;
