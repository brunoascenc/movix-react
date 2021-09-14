import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 120px;
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
  width: ${(props) => (props.overviewLength >= 600 ? '32%' : '30%')};
  position: relative;
`;

export const MovieImage = styled.img`
  width: ${(props) => (props.overviewLength >= 600 ? '380px' : '350px')};
  position: absolute;
  top: -50px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.5);
  image-rendering: -webkit-optimize-contrast;
  opacity: 95%;
  height: ${(props) => (props.overviewLength >= 600 ? '580px' : '540px')};
`;

export const MovieInfo = styled.div`
  width: 60%;

  h1 {
    font-family: 'Archivo Black', sans-serif;
    margin-bottom: 5px;
    margin-left: -1px;
    color: #e4e5eb;
  }

  p {
    line-height: 22px;
    width: 95%;
    margin-bottom: 15px;
    color: ${(props) => props.theme.textColor};
  }

  li {
    color: ${(props) => props.theme.textColor};
    line-height: 22px;
  }

  span {
    color: ${(props) => props.theme.textColor};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2px;
`;

export const ButtonStyle = styled(CustomButton)`
  align-items: center;
  padding: 8px 16px;
  margin-right: 7px;
  width: unset;
  .list-icons {
    margin-right: 5px;
    font-size: 22px;
    margin-top: -2px;
  }
`;

export const MovieTitle = styled.div`
  h1 {
    font-family: 'Archivo Black', sans-serif;
    line-height: 37px;
  }

  div {
    display: flex;
    align-items: center;

    .release-date {
      margin-right: 30px;
      margin-top: -4px;
      color: ${(props) => props.theme.textColor};
      display: flex;
      align-items: center;

      .certification {
        display: ${(props) => (props.certification === '' ? 'none' : 'block')};
        border: solid 1px rgb(145, 145, 156, 0.8);
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 10px;
        margin-right: 7px;
      }

      .movie-date {
        font-size: 13px;
        margin-top: 2px;
      }
    }
  }

  ul {
    list-style: circle;
    display: flex;
    align-items: center;
    li {
      color: ${(props) => props.theme.textColor};
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
  margin-top: 23px;
  margin-bottom: 23px;

  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .vote {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: solid 2px rgb(141, 40, 224, 0.7);
      margin-right: 20px;
      font-size: 18px;
      font-weight: bold;
      background: rgb(11, 9, 13);
      color: unset;
      transition: 0.1s ease;

      &:hover {
        border: solid 2px rgb(141, 40, 224);
      }
    }

    p {
      margin: 0 10px -5px -12px;
      color: unset;
      width: 55px;
      font-size: 13px;
      line-height: 15px;
    }
  }
`;

export const MovieCast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 30px;
  margin-top: 25px;
  div {
    display: flex;
    flex-direction: column;

    .name {
      color: unset;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .character {
      color: #91919c;
      font-size: 13px;
    }
  }
`;
