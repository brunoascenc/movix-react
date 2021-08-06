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
  width: 750px;
  p {
    margin-left: 2px;
    margin-top: 15px;
    line-height: 23px;
    color: #b8bfbb;
    font-size: 15px;
    color: rgb(217, 204, 204, 0.8);
  }

  div {
    display: flex;
  }
`;

export const MovieTitle = styled.h1`
  font-family: 'Archivo Black', sans-serif;
  font-size: 49px;
  letter-spacing: -1px;
  line-height: 45px;
  color: #e9f0eb;
`;
