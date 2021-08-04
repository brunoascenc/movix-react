import styled from 'styled-components';

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

    /* filter: brightness(50%); */
  }
`;

export const Button = styled.button`
  padding: 12px 16px;
  width: 300px;
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
