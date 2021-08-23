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
  left: 15px;
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  display: ${(props) => (props.movieslength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 53%;
  right: 21px;
`;

export const SliderNav = ({ prev, next, movieslength }) => {
  return (
    <>
      <LeftArrow
        movieslength={movieslength && movieslength.length}
        className={prev}
      />
      <RightArrow
        movieslength={movieslength && movieslength.length}
        className={next}
      />
    </>
  );
};
