import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const LeftArrow = styled(MdKeyboardArrowLeft)`
  display: ${(props) => (props.moviesLength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 50%;
  left: 15px;
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  display: ${(props) => (props.moviesLength <= 7 ? 'none' : 'block')};
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 50%;
  right: 21px;
`;

export const SliderNav = ({ prev, next, moviesLength }) => {
  return (
    <>
      <LeftArrow
        moviesLength={moviesLength && moviesLength.length}
        className={prev}
      />
      <RightArrow
        moviesLength={moviesLength && moviesLength.length}
        className={next}
      />
    </>
  );
};
