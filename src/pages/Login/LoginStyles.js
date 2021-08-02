import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 12px 16px;
  width: 406px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  font-size: 18px;
  margin-top: 15px;
  margin-left: ${(props) => (props.secondary ? '12px' : '2px')};
  letter-spacing: 1px;
  cursor: pointer;
  background-image: ${(props) =>
    props.primary
      ? 'linear-gradient(to bottom right,rgb(160, 63, 240),rgba(84, 29, 139, 0.788))'
      : null};
`;

export const LoginLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;

  p {
    color: grey;
    margin-top: 15px;
    line-height: 22px;
    text-align: center;
  }
`;
