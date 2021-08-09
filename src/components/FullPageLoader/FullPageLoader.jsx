import React from 'react';
import styled from 'styled-components';
import Loader from '../../images/loader.svg';

const LoaderWrapper = styled.div`
  height: 100vh;
`;
const FullPageLoader = () => {
  return (
    <LoaderWrapper>
      <img src={Loader} alt="loader" />
    </LoaderWrapper>
  );
};

export default FullPageLoader;
