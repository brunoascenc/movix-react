import React from 'react';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.overlay};
  z-index: 1;
`;

export const HorizontalOverlay = ({ ...props }) => {
  return <Overlay {...props}></Overlay>;
};
