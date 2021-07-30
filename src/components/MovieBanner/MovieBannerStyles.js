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
    /* margin-left: 3px; */
    margin-top: 15px;
  }

  div {
    display: flex;
    button {
      padding: 8px 16px;
      width: 100px;
      display: flex;
      justify-content: center;
      border-radius: 16px;
      color: white;
      border: none;
      font-size: 13px;
      background: rgb(158, 61, 238);
      margin-top: 10px;
      margin-left: 2px;
      letter-spacing: 1px;
      cursor: pointer;
      background-image: linear-gradient(
        to bottom right,
        rgb(160, 63, 240),
        rgba(84, 29, 139, 0.788)
      );
    }

    .watchlist {
      margin-left: 15px;
      background: #ffffff;
      color: black;
      border: none;
    }
  }
`;

export const MovieTitle = styled.span`
  font-family: 'Archivo Black', sans-serif;
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 45px;
  color: #edeff2;
  /* text-transform: uppercase; */
`;
