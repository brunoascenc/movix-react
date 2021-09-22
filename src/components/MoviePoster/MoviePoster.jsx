import React from 'react';
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';

const Image = styled.img`
  /* width: ${(props) =>
    props.resultsCard ? '230px' : props.carouselImage ? '100%' : '175px'};
  height: ${(props) =>
    props.resultsCard ? '350px' : props.carouselImage ? '100%' : '260px'}; */
  width: 100%;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
  image-rendering: -webkit-optimize-contrast;
`;

const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to top, rgb(7, 5, 8, 0.8) 30%, transparent);
  background-image: linear-gradient(
    to top,
    rgb(7, 5, 8, 0.8) 40%,
    rgb(7, 5, 8, 0.3)
  );
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 7px;
  transition: 0.2s ease;
  border-radius: 12px;

  &:hover {
    margin-top: 1px;

    ${ImageHover} {
      opacity: 1;
      transition: 0.2s ease-in-out;
    }
  }
`;

const ImageHoverContent = styled.div`
  margin-top: ${(props) => (props.resultsCard ? '230px' : '180px')};
  margin-left: 10px;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    color: #f5eded;
    font-size: ${(props) => (props.resultsCard ? '19px' : '17px')};
    letter-spacing: 0.5px;
    font-family: 'Roboto Condensed', sans-serif;
    .details-arrow {
      margin-left: 5px;
      margin-top: 1px;
    }
  }

  p {
    color: #e8dfdf;
    font-size: 12px;
    font-size: ${(props) => (props.resultsCard ? '14px' : '12px')};
    letter-spacing: 0.5px;
    margin-bottom: 2px;
    font-smooth: auto;
    width: 95%;
    padding-right: 3%;
  }
`;

const MoviePoster = ({ url, movieId, title, loading, ...props }) => {
  return (
    <>
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
    </>
  );
};

export default MoviePoster;
