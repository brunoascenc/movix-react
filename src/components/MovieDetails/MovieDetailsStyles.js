import styled from 'styled-components';

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

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: none;
  font-size: 13px;
  margin-top: 10px;
  margin-left: ${(props) => (props.secondary ? '12px' : '0')};
  letter-spacing: 1px;
  cursor: pointer;
  background-image: ${(props) =>
    props.primary
      ? 'linear-gradient(to bottom right,rgb(160, 63, 240),rgba(84, 29, 139, 0.788))'
      : null};

  .list-icons {
    margin-right: 5px;
  }
`;
