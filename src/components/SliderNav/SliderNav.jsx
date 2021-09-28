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
  top: 50%;
  transform: translateY(-50%);
  /* left: -30px; */
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 30px;
  color: #ffffff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* right: -30px; */
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
