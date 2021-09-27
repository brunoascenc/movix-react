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
  width: ${(props) =>
    props.resultsCard ? '230px' : props.carouselImage ? '100%' : '175px'};
  height: ${(props) => (props.resultsCard ? '350px' : '260px')};
  background: linear-gradient(268deg, #110f12, #0b090d);
  animation: ${Gradient} 1.5s linear infinite;
  border-radius: 12px;
  border: solid 1px rgb(44, 44, 51, 0.4);
  background-size: 400% 400%;
  margin-top: 7px;

  @media (min-width: 120px) {
    width: ${(props) =>
      props.resultsCard ? '100%' : props.carouselImage ? '100%' : '175px'};
    height: ${(props) =>
      props.resultsCard ? '285px' : props.carouselImage ? '205px' : '260px'};
  }

  @media (min-width: 271px) {
    width: ${(props) =>
      props.resultsCard ? '100%' : props.carouselImage ? '100%' : '175px'};
    height: ${(props) =>
      props.resultsCard ? '205px' : props.carouselImage ? '205px' : '260px'};
  }

  @media (min-width: 320px) {
    height: ${(props) =>
      props.resultsCard ? '235px' : props.carouselImage ? '150px' : '260px'};
  }

  @media (min-width: 355px) {
    height: ${(props) =>
      props.resultsCard ? '250px' : props.carouselImage ? '165px' : '260px'};
  }

  @media (min-width: 400px) {
    height: ${(props) =>
      props.resultsCard ? '275px' : props.carouselImage ? '195px' : '260px'};
  }

  @media (min-width: 415px) {
    height: ${(props) =>
      props.resultsCard ? '190px' : props.carouselImage ? '195px' : '260px'};
  }

  @media (min-width: 425px) {
    height: ${(props) =>
      props.resultsCard ? '200px' : props.carouselImage ? '200px' : '260px'};
  }

  @media (min-width: 447px) {
    height: ${(props) =>
      props.resultsCard ? '210px' : props.carouselImage ? '220px' : '260px'};
  }

  @media (min-width: 465px) {
    height: ${(props) =>
      props.resultsCard ? '200px' : props.carouselImage ? '220px' : '260px'};
  }

  @media (min-width: 485px) {
    height: ${(props) =>
      props.resultsCard ? '215px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 510px) {
    height: ${(props) =>
      props.resultsCard ? '235px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 525px) {
    height: ${(props) =>
      props.resultsCard ? '235px' : props.carouselImage ? '185px' : '260px'};
  }

  @media (min-width: 560px) {
    height: ${(props) =>
      props.resultsCard ? '250px' : props.carouselImage ? '190px' : '260px'};
  }

  @media (min-width: 610px) {
    height: ${(props) =>
      props.resultsCard ? '265px' : props.carouselImage ? '200px' : '260px'};
  }

  @media (min-width: 645px) {
    height: ${(props) =>
      props.resultsCard ? '290px' : props.carouselImage ? '215px' : '260px'};
  }

  @media (min-width: 680px) {
    height: ${(props) =>
      props.resultsCard ? '310px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 687px) {
    height: ${(props) =>
      props.resultsCard ? '230px' : props.carouselImage ? '225px' : '260px'};
  }

  @media (min-width: 720px) {
    height: ${(props) =>
      props.resultsCard ? '245px' : props.carouselImage ? '250px' : 'unset'};
  }

  @media (min-width: 735px) {
    height: ${(props) =>
      props.resultsCard ? '255px' : props.carouselImage ? '255px' : 'unset'};
  }

  @media (min-width: 825px) {
    height: ${(props) =>
      props.resultsCard ? '270px' : props.carouselImage ? '220px' : '260px'};
  }

  @media (min-width: 860px) {
    height: ${(props) =>
      props.resultsCard ? '290px' : props.carouselImage ? '230px' : '260px'};
  }

  @media (min-width: 920px) {
    height: ${(props) =>
      props.resultsCard ? '315px' : props.carouselImage ? '250px' : '260px'};
  }

  @media (min-width: 980px) {
    height: ${(props) =>
      props.resultsCard ? '320px' : props.carouselImage ? '268px' : '260px'};
  }

  @media (min-width: 1043px) {
    height: ${(props) =>
      props.resultsCard ? '275px' : props.carouselImage ? '250px' : '260px'};
  }

  @media (min-width: 1086px) {
    height: ${(props) =>
      props.resultsCard ? '275px' : props.carouselImage ? '268px' : '260px'};
  }

  @media (min-width: 1100px) {
    height: ${(props) =>
      props.resultsCard ? '295px' : props.carouselImage ? '275px' : '260px'};
  }

  @media (min-width: 1150px) {
    height: ${(props) =>
      props.resultsCard ? '310px' : props.carouselImage ? '260px' : '260px'};
  }

  @media (min-width: 1250px) {
    height: ${(props) =>
      props.resultsCard ? '325px' : props.carouselImage ? '275px' : '260px'};
  }

  @media (min-width: 1295px) {
    height: ${(props) =>
      props.resultsCard ? '325px' : props.carouselImage ? '256px' : '260px'};
  }

  @media (min-width: 1350px) {
    height: ${(props) =>
      props.resultsCard ? '340px' : props.carouselImage ? '265px' : '260px'};
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
