import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  /* justify-content: space-between; */

  .overview {
    h2 {
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
  }

  .tagline {
    margin-bottom: 12px;
    span {
      color: #787880;
      font-style: italic;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 450px;
  width: 30%;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 350px;
  position: absolute;
  top: -50px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  image-rendering: -webkit-optimize-contrast;
  opacity: 95%;
`;

export const MovieInfo = styled.div`
  width: 60%;

  h1 {
    font-family: 'Archivo Black', sans-serif;
    margin-bottom: 5px;
    color: #e4e5eb;
  }

  p {
    line-height: 22px;
    width: 85%;
    color: grey;
    margin-bottom: 15px;
    color: #91919c;
  }

  li {
    color: #91919c;
    line-height: 22px;
  }

  span {
    color: #b0b4b8;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  /* margin-top: 10px; */

  .trailer-btn {
    background: transparent;
    border-radius: 0;
    border: none;
    margin-left: 15px;
    color: #dadbe0;
    font-size: 16px;

    .trailer-icon {
      font-size: 25px;
      margin-right: 5px;
    }
  }
`;

export const ButtonStyle = styled(CustomButton)`
  align-items: center;
  padding: 7px 16px;
  width: unset;

  .list-icons {
    margin-right: 5px;
    font-size: 13px;
  }
`;

export const MovieTitle = styled.div`
  h1 {
    font-family: 'Archivo Black', sans-serif;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: -4px;

    .release-date {
      margin-right: 30px;
      color: #b2aab5;
      font-size: 14px;
    }
  }

  ul {
    list-style: circle;
    display: flex;
    align-items: center;
    li {
      color: #b2aab5;
      font-size: 14px;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
`;

export const MovieActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;

  div {
    display: flex;
    align-items: center;
    .vote {
      padding: 16px 16px;
      border-radius: 50%;
      border: solid 2px rgb(141, 40, 224, 0.7);
      margin-right: 20px;
      font-size: 18px;
      font-weight: bold;
      background: rgb(11, 9, 13);
      color: #e4e5eb;
      transition: 0.1s ease;

      &:hover {
        border: solid 2px rgb(141, 40, 224);
      }
    }

    p {
      margin-left: -12px;
      margin-right: 10px;
      margin-top: 20px;
      color: #dadbe0;
      width: 55px;
      font-size: 13px;
      line-height: 15px;
    }
  }
`;
