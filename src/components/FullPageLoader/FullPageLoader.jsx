import React from 'react';
import Loader from '../../images/loader.svg';

const FullPageLoader = () => {
  return (
    <div className="loader-wrapper">
      <img src={Loader} alt="loader" />
    </div>
  );
};

export default FullPageLoader;
