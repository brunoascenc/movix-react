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
  /* margin-right: ${(props) => (props.userList ? '15px' : 'unset')}; */
  /* margin-bottom: 22px; */
  @media (min-width: 320px) {
    height: ${(props) => (props.carouselImage ? '145px' : 'unset')};
    width: ${(props) => (props.carouselImage ? '100%' : 'unset')};
  }

  @media (min-width: 355px) {
    height: ${(props) => (props.carouselImage ? '160px' : 'unset')};
  }

  @media (min-width: 400px) {
    height: ${(props) => (props.carouselImage ? '170px' : 'unset')};
  }

  @media (min-width: 425px) {
    height: ${(props) => (props.carouselImage ? '183px' : 'unset')};
  }

  @media (min-width: 465px) {
    height: ${(props) => (props.carouselImage ? '200px' : 'unset')};
  }

  @media (min-width: 485px) {
    height: ${(props) => (props.carouselImage ? '215px' : 'unset')};
  }

  @media (min-width: 510px) {
    height: ${(props) => (props.carouselImage ? '225px' : 'unset')};
  }

  @media (min-width: 560px) {
    height: ${(props) => (props.carouselImage ? '250px' : 'unset')};
  }

  @media (min-width: 610px) {
    height: ${(props) => (props.carouselImage ? '200px' : 'unset')};
  }

  @media (min-width: 680px) {
    height: ${(props) => (props.carouselImage ? '225px' : 'unset')};
  }

  @media (min-width: 720px) {
    height: ${(props) => (props.carouselImage ? '250px' : 'unset')};
  }

  @media (min-width: 825px) {
    height: ${(props) => (props.carouselImage ? '220px' : 'unset')};
  }

  @media (min-width: 920px) {
    height: ${(props) => (props.carouselImage ? '250px' : 'unset')};
  }

  @media (min-width: 980px) {
    height: ${(props) => (props.carouselImage ? '268px' : 'unset')};
  }

  @media (min-width: 1100px) {
    height: ${(props) => (props.carouselImage ? '275px' : 'unset')};
  }

  @media (min-width: 1150px) {
    height: ${(props) => (props.carouselImage ? '260px' : 'unset')};
  }

  @media (min-width: 1250px) {
    height: ${(props) => (props.carouselImage ? '240px' : 'unset')};
  }

  @media (min-width: 1350px) {
    height: ${(props) => (props.carouselImage ? '260px' : 'unset')};
  }

  @media (min-width: 1500px) {
    height: ${(props) => (props.carouselImage ? '300px' : 'unset')};
  }

  @media (min-width: 1680px) {
    height: ${(props) => (props.carouselImage ? '320px' : 'unset')};
  }

  @media (min-width: 1780px) {
    height: ${(props) => (props.carouselImage ? '355px' : 'unset')};
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
