import React from 'react';
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';

const Image = styled.img`
  width: 196px;
  height: 295px;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.3);
  image-rendering: -webkit-optimize-contrast;
  transition: 0.2s ease;
`;

const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 196px;
  background-image: linear-gradient(to top, rgb(7, 5, 8, 0.8) 30%, transparent);
  height: 295px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: 0.2s ease;
`;

const ImageContainer = styled.div`
  position: relative;
  transition: 0.2s ease;
  margin-top: 3px;

  &:hover {
    margin-top: -1px;

    ${ImageHover} {
      opacity: 1;
    }
  }
`;

const ImageHoverContent = styled.div`
  margin-top: 180px;
  margin-left: 10px;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    color: #f5eded;
    font-size: 17px;
    letter-spacing: 0.5px;
    font-family: 'Roboto Condensed', sans-serif;
    .details-arrow {
      margin-left: 5px;
      margin-top: 1px;
    }
  }

  p {
    color: #f2ebeb;
    font-size: 12px;
    letter-spacing: 0.5px;
    margin-bottom: 2px;
    font-smooth: auto;
  }
`;

const MoviePoster = ({ url, movieId, title }) => {
  return (
    <ImageContainer key={movieId}>
      <Image src={url} data-movie-id={movieId} alt={title} />
      <ImageHover>
        <ImageHoverContent>
          <p>{title}</p>
          <button>
            Details <CgArrowLongRight className="details-arrow" />
          </button>
        </ImageHoverContent>
      </ImageHover>
    </ImageContainer>
  );
};

export default MoviePoster;
