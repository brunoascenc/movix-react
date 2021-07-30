import styled from 'styled-components';

export const MovieImage = styled.div`
  height: 75vh;
  background-size: cover;
  background-position: top;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BannerContent = styled.div`
  width: 600px;
  p {
    margin-left: 2px;
    margin-top: 15px;
  }

  div {
    display: flex;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  font-size: 13px;
  margin-top: 10px;
  margin-left: ${(props) => (props.secondary ? '12px' : '2px')};
  letter-spacing: 1px;
  cursor: pointer;
  background-image: ${(props) =>
    props.primary
      ? 'linear-gradient(to bottom right,rgb(160, 63, 240),rgba(84, 29, 139, 0.788))'
      : null};
`;

export const MovieTitle = styled.h1`
  font-family: 'Archivo Black', sans-serif;
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 45px;
  color: #edeff2;
`;
