import styled from 'styled-components';
import { CustomButton } from '../../components/CustomButton/CustomButton';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: flex-start;
  padding-left: 4%;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgb(11, 9, 13, 0.3),
    rgb(11, 9, 13) 95%
  );
  @media (max-width: 585px) {
    background: linear-gradient(to bottom, rgb(11, 9, 13, 0.6), rgb(11, 9, 13));
    .horizontal-overlay {
      display: none;
    }
  }

  @media (max-width: 1050px) {
    height: 85vh;
  }

  @media (max-width: 525px) {
    height: 60vh;
  }

  margin-bottom: -100px;
`;

export const Button = styled(CustomButton)`
  padding: 12px 16px;
  width: 90%;
  font-size: 18px;
  margin-top: 15px;
  border-radius: 30px;
`;

export const LoginLink = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  @media (max-width: 475px) {
    margin-left: -15px;
  }

  @media (max-width: 350px) {
    width: 100%;
  }

  p {
    color: #afb5bd;
    margin-top: 15px;
    line-height: 22px;
    text-align: center;
    font-size: 14px;
  }

  h1 {
    font-size: 28px;
    text-align: center;
    @media (max-width: 350px) {
      font-size: 22px;
    }
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const LoginContent = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 3% 0 3%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 585px) {
    align-items: center;
  }
`;
