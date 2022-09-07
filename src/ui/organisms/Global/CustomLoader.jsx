import React from 'react';
import { Vortex } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[
        '#1D99FF',
        '#00E08F',
        '#714AFF',
        '#1D99FF',
        '#00E08F',
        '#714AFF',
      ]}
    />
  );
};

export default CustomLoader;
