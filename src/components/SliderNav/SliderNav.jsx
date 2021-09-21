import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const LeftArrow = styled(MdKeyboardArrowLeft)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  font-size: 30px;
  color: #ffffff;
  position: absolute;
  top: 53%;
  left: 11px;

  @media (max-width: 1250px) {
    left: 0;
  }

  @media (max-width: 825px) {
    font-size: 20px;
  }

  @media (max-width: 610px) {
    font-size: 15px;
  }

  @media (max-width: 430px) {
    left: -2px;
  }
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
  position: absolute;
  top: 53%;
  right: 11px;
  @media (max-width: 1250px) {
    right: 0;
  }

  @media (max-width: 825px) {
    font-size: 20px;
  }

  @media (max-width: 610px) {
    font-size: 15px;
  }

  @media (max-width: 430px) {
    right: -2px;
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
