import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const LeftArrow = styled(MdKeyboardArrowLeft)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 53%;
  left: 10px;

  @media (min-width: 1920px) {
    left: 15px;
  }
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 53%;
  right: 11px;

  @media (min-width: 1520px) {
    right: 40px;
  }

  @media (min-width: 1680px) {
    right: 60px;
  }

  @media (min-width: 1920px) {
    right: 85px;
  }
`;

export const SliderNav = ({ carouselName, movieslength }) => {
  return (
    <>
      <LeftArrow
        movieslength={movieslength && movieslength.length}
        className={'prev-' + carouselName}
      />
      <RightArrow
        movieslength={movieslength && movieslength.length}
        className={'next-' + carouselName}
      />
    </>
  );
};
