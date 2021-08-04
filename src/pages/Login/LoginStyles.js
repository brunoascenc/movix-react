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
  video {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

export const Button = styled(CustomButton)`
  padding: 12px 16px;
  width: 300px;
  font-size: 18px;
  margin-top: 15px;
`;

export const LoginLink = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  p {
    color: #afb5bd;
    margin-top: 15px;
    line-height: 22px;
    text-align: center;
    font-size: 14px;
  }

  h1 {
    font-size: 28px;
  }
`;
