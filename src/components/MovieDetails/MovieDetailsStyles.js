import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  height: 450px;
  width: 30%;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 350px;
  position: absolute;
  top: -150px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
  image-rendering: -webkit-optimize-contrast;
`;

export const MovieInfo = styled.div`
  width: 70%;
  h1 {
    font-family: 'Archivo Black', sans-serif;
    margin-bottom: 10px;
  }

  p {
    line-height: 19px;
    width: 85%;
    color: grey;
    margin-bottom: 15px;
  }

  li {
    color: grey;
  }

  span {
    color: white;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ButtonStyle = styled(CustomButton)`
  align-items: center;

  .list-icons {
    margin-right: 5px;
  }
`;
