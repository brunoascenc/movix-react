import React from 'react';
import styled, { keyframes } from 'styled-components';

const Gradient = keyframes`
  0%{
    background-position:0% 50%
  }
  50%{
    background-position:100% 50%
  }
  100%{
    background-position:0% 50%
    }
`;

const Skeleton = styled.div`
  pointer-events: none;
  width: ${(props) => (props.resultsCard ? '230px' : '175px')};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: linear-gradient(268deg, #131114, #0b090d);
  animation: ${Gradient} 1.5s ease infinite;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
  background-size: 400% 400%;
  margin-top: 7px;

  @media (min-width: 320px) {
    height: ${(props) =>
      props.resultsCard ? '215px' : props.carouselImage ? '145px' : '260px'};
    width: ${(props) =>
      props.resultsCard ? '100%' : props.carouselImage ? '100%' : '175px'};
  }

  @media (min-width: 355px) {
    height: ${(props) =>
      props.resultsCard ? '250px' : props.carouselImage ? '160px' : '260px'};
  }

  @media (min-width: 400px) {
    height: ${(props) =>
      props.resultsCard ? '250px' : props.carouselImage ? '170px' : '260px'};
  }

  @media (min-width: 425px) {
    height: ${(props) =>
      props.resultsCard ? '280px' : props.carouselImage ? '183px' : '260px'};
  }

  @media (min-width: 447px) {
    height: ${(props) =>
      props.resultsCard ? '200px' : props.carouselImage ? '183px' : '260px'};
  }

  @media (min-width: 465px) {
    height: ${(props) =>
      props.resultsCard ? '200px' : props.carouselImage ? '200px' : '260px'};
  }

  @media (min-width: 485px) {
    height: ${(props) =>
      props.resultsCard ? '215px' : props.carouselImage ? '215px' : '260px'};
  }

  @media (min-width: 510px) {
    height: ${(props) =>
      props.resultsCard ? '220px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 560px) {
    height: ${(props) =>
      props.resultsCard ? '250px' : props.carouselImage ? '250px' : '260px'};
  }

  @media (min-width: 610px) {
    height: ${(props) =>
      props.resultsCard ? '265px' : props.carouselImage ? '200px' : '260px'};
  }

  @media (min-width: 680px) {
    height: ${(props) =>
      props.resultsCard ? '290px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 720px) {
    height: ${(props) =>
      props.resultsCard ? '315px' : props.carouselImage ? '250px' : 'unset'};
  }

  @media (min-width: 735px) {
    height: ${(props) =>
      props.resultsCard ? '230px' : props.carouselImage ? '250px' : 'unset'};
  }

  @media (min-width: 825px) {
    height: ${(props) =>
      props.resultsCard ? '265px' : props.carouselImage ? '220px' : '260px'};
  }

  @media (min-width: 920px) {
    height: ${(props) =>
      props.resultsCard ? '290px' : props.carouselImage ? '250px' : '260px'};
  }

  @media (min-width: 980px) {
    height: ${(props) =>
      props.resultsCard ? '320px' : props.carouselImage ? '268px' : '260px'};
  }

  @media (min-width: 1100px) {
    height: ${(props) =>
      props.resultsCard ? '350px' : props.carouselImage ? '275px' : '260px'};
  }

  @media (min-width: 1086px) {
    height: ${(props) =>
      props.resultsCard ? '270px' : props.carouselImage ? '268px' : '260px'};
  }

  @media (min-width: 1150px) {
    height: ${(props) =>
      props.resultsCard ? '285px' : props.carouselImage ? '260px' : '260px'};
  }

  @media (min-width: 1250px) {
    height: ${(props) =>
      props.resultsCard ? '295px' : props.carouselImage ? '240px' : '260px'};
  }

  @media (min-width: 1350px) {
    height: ${(props) =>
      props.resultsCard ? '330px' : props.carouselImage ? '260px' : '260px'};
  }

  @media (min-width: 1500px) {
    height: ${(props) =>
      props.resultsCard ? '300px' : props.carouselImage ? '300px' : '260px'};
  }

  @media (min-width: 1680px) {
    height: ${(props) =>
      props.resultsCard ? '325px' : props.carouselImage ? '320px' : '260px'};
  }

  @media (min-width: 1780px) {
    height: ${(props) =>
      props.resultsCard ? '330px' : props.carouselImage ? '355px' : '260px'};
  }

  div {
    width: 100%;
    height: 100%;
  }
`;

const MoviesSkeleton = ({ ...props }) => {
  return <Skeleton {...props}></Skeleton>;
};

export default MoviesSkeleton;
