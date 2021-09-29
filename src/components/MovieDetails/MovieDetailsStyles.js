import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 120px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }

  .overview {
    @media (max-width: 1050px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      p {
        text-align: center;
      }
    }
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
  position: relative;
  width: ${(props) => (props.overviewLength >= 600 ? '380px' : '350px')};
  height: ${(props) => (props.overviewLength >= 600 ? '580px' : '540px')};

  @media (max-width: 1050px) {
    width: 100%;
    height: 320px;
  }
  @media (max-width: 335px) {
    height: 200px;
  }
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
  @media (max-width: 1050px) {
    left: 50%;
    top: -130px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 280px;
    height: 420px;
  }

  @media (max-width: 335px) {
    width: 210px;
    height: 320px;
  }
`;

export const MovieInfo = styled.div`
  width: 60%;
  margin: -30px 0 0 40px;

  @media (max-width: 1050px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: -30px 0 0 0; */
    margin: 0;
  }

  @media (max-width: 875px) {
    width: 100%;
  }

  h1 {
    font-family: 'Archivo Black', sans-serif;
    margin-bottom: 5px;
    margin-left: -1px;
    color: #e4e5eb;
    @media (max-width: 1050px) {
      margin-left: 0;
      text-align: center;
    }
  }

  p {
    line-height: 22px;
    width: 95%;
    margin-bottom: 15px;
    color: ${(props) => props.theme.textColor};
    @media (max-width: 1050px) {
      width: 100%;
    }

    @media (max-width: 575px) {
      font-size: 15px;
      line-height: 20px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
      line-height: 18px;
    }
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
  @media (max-width: 348px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ButtonStyle = styled(CustomButton)`
  align-items: center;
  padding: 8px 16px;
  margin-right: 7px;
  width: unset;
  .list-icons {
    margin: -2px 5px 0 0;
    font-size: 22px;
    @media (max-width: 515px) {
      font-size: 18px;
    }
  }

  @media (max-width: 605px) {
    margin-right: 0;
  }

  @media (max-width: 515px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const MovieTitle = styled.div`
  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    @media (max-width: 515px) {
      display: flex;
      flex-direction: column;
    }
  }

  h1 {
    font-family: 'Archivo Black', sans-serif;
    line-height: 37px;

    @media (max-width: 1050px) {
      line-height: 26px;
      margin-bottom: 10px;
    }
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
        @media (max-width: 515px) {
          margin: 0;
          margin-bottom: 5px;
        }
      }
      .movie-date {
        font-size: 13px;
        margin-top: 2px;
        @media (max-width: 515px) {
          margin-bottom: 5px;
        }
        @media (max-width: 320px) {
          font-size: 12px;
        }
      }

      @media (max-width: 515px) {
        margin-right: 0;
      }
    }
  }
  ul {
    list-style: circle;
    display: flex;
    align-items: center;

    @media (max-width: 395px) {
      flex-direction: column;
    }

    li {
      color: ${(props) => props.theme.textColor};
      font-size: 14px;
      @media (max-width: 320px) {
        font-size: 12px;
      }
      &:first-child {
        margin-right: 30px;
        @media (max-width: 515px) {
          margin-right: 25px;
          list-style: none;
        }

        @media (max-width: 395px) {
          margin-right: 0;
        }
        @media (max-width: 285px) {
          margin-right: 10px;
        }
      }

      @media (max-width: 395px) {
        list-style: none;
      }
    }
  }
`;

export const MovieActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  margin-bottom: 23px;

  @media (max-width: 455px) {
    flex-direction: column;
  }

  .vote-average {
    display: flex;
    align-items: center;
    margin-right: 10px;
    @media (max-width: 1050px) {
      margin: 0;
    }

    @media (max-width: 455px) {
      flex-direction: column;
    }
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

      @media (max-width: 515px) {
        width: 45px;
        height: 45px;
        font-size: 16px;
      }

      @media (max-width: 455px) {
        margin-right: 0;
      }
    }
    p {
      margin: 0 10px -5px -12px;
      color: unset;
      width: 55px;
      font-size: 13px;
      line-height: 15px;

      @media (max-width: 515px) {
        font-size: 11px;
        margin-right: 0;
      }

      @media (max-width: 455px) {
        width: 100%;
        margin: 5px 0 10px 0;
      }
    }
  }
`;

export const MovieCast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 25px;

  @media (max-width: 645px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    display: flex;
    flex-direction: column;
    @media (max-width: 1050px) {
      align-items: center;
    }

    .name {
      color: unset;
      font-size: 16px;
      margin-bottom: 2px;
      @media (max-width: 575px) {
        font-size: 12px;
      }

      @media (max-width: 320px) {
        text-align: center;
      }
    }
    .character {
      color: #91919c;
      font-size: 13px;
      @media (max-width: 575px) {
        font-size: 11px;
      }
    }
  }
`;
