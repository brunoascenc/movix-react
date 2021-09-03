import React from 'react';
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';

const Image = styled.img`
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.2);
  image-rendering: -webkit-optimize-contrast;
  /* transition: 0.2s ease; */
`;

const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 175px; */
  width: 100%;
  background-image: linear-gradient(to top, rgb(7, 5, 8, 0.8) 30%, transparent);
  /* height: 265px; */
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  /* transition: 0.2s ease; */
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 7px;
  transition: 0.2s ease;
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: rgb(44, 44, 51, 0.2);
  border-radius: 12px;

  &:hover {
    margin-top: 1px;
    /* z-index: 100; */

    ${ImageHover} {
      opacity: 1;
      transition: 0.2s ease-in-out;
    }
  }
`;

const ImageHoverContent = styled.div`
  /* margin-top: 180px; */
  margin-top: ${(props) => (props.resultsCard ? '230px' : '180px')};
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
    width: ${(props) => (props.resultsCard ? '95%' : 'unset')};
  }
`;

const MoviePoster = ({ url, movieId, title, ...props }) => {
  return (
    <ImageContainer key={movieId} {...props}>
      <Image src={url} data-movie-id={movieId} alt={title} {...props} />
      <ImageHover>
        <ImageHoverContent {...props}>
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
