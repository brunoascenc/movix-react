import styled from 'styled-components';
import { CustomButton } from '../CustomButton/CustomButton';

export const DetailsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  /* justify-content: space-between; */
`;

export const ImageContainer = styled.div`
  height: 450px;
  width: 30%;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 350px;
  position: absolute;
  top: -120px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  image-rendering: -webkit-optimize-contrast;
  opacity: 70%;
`;

export const MovieInfo = styled.div`
  width: 60%;
  h1 {
    font-family: 'Archivo Black', sans-serif;
    margin-bottom: 5px;
    color: #e4e5eb;
  }

  p {
    line-height: 19px;
    width: 85%;
    color: grey;
    margin-bottom: 15px;
    color: #999a9e;
  }

  li {
    color: #999a9e;
    line-height: 22px;
  }

  span {
    color: #e4e5eb;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ButtonStyle = styled(CustomButton)`
  align-items: center;
  width: unset;

  .list-icons {
    margin-right: 5px;
    font-size: 13px;
  }
`;
