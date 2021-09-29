import React from 'react';
import styled from 'styled-components';
import Loader from '../../images/loader.svg';

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgb(11, 9, 13);
`;

const FullPageLoader = ({ ...props }) => {
  return (
    <LoaderWrapper {...props}>
      <img src={Loader} alt="loader" />
    </LoaderWrapper>
  );
};

export default FullPageLoader;
