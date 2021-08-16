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
    background: #8d28e0;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 75px;
    border-radius: 50%;
    color: #e1dce6;
    z-index: 1;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Stripe = styled.div`
  position: absolute;
  left: -670px;
  top: 0;
  background: linear-gradient(to bottom, #8d28e0, #1e1d1f);
  width: 1000px;
  height: 600px;
  transform: rotate(45deg);
`;

export const UserInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  p {
    color: #e1dce6;
    font-size: 35px;
    margin-bottom: 15px;
    font-weight: bold;
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
        color: #e1dce6;
      }
      p {
        width: 50px;
        margin-left: 15px;
        font-size: 18px;
        font-weight: 100;
        margin-top: 15px;
        color: #91919c;
        color: #e1dce6;
      }
    }

    a {
      background: #e7e4eb;
      padding: 6px 16px;
      border-radius: 16px;
      margin-left: -20px;
      color: #e1dce6;
      color: #575559;
      font-family: 'Roboto Condensed', sans-serif;
    }
  }
`;
