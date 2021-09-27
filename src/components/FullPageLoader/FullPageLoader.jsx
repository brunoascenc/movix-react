import React from 'react';
import styled from 'styled-components';
import Loader from '../../images/loader.svg';

const LoaderWrapper = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullPageLoader = () => {
  return (
    <>
      <img src={Loader} alt="loader" />
    </>
  );
};

export default FullPageLoader;
