import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const LeftArrow = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 50%;
  left: 15px;
`;

const RightArrow = styled(MdKeyboardArrowRight)`
  cursor: pointer;
  font-size: 18px;
  color: #e0d2d19d;
  position: absolute;
  top: 50%;
  right: 21px;
`;

export const SliderNav = ({ prev, next }) => {
  return (
    <>
      <LeftArrow className={prev} />
      <RightArrow className={next} />
    </>
  );
};
