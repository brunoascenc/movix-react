import styled from 'styled-components';

export const MovieImage = styled.div`
  height: 75vh;
  background-size: cover;
  background-position: top;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BannerContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const BannerContent = styled.div`
  z-index: 2;
  width: 600px;
  p {
    margin-left: 2px;
    margin-top: 15px;
    line-height: 23px;
    color: #a1a6ad;
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
  color: #f0f5f1;
`;

export const HorizontalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
  background: linear-gradient(
    to right,
    rgb(10, 10, 14, 0.7) 30%,
    transparent 65%
  );
`;
