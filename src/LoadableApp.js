import React from 'react';
import Loadable from 'react-loadable';
import CustomLoader from './ui/organisms/Global/CustomLoader';

const LoadApp = Loadable({
  loader: () => import('./App'),
  loading() {
    return <CustomLoader />;
  },
  timeout: 10000, // 10 seconds
});
const LoadableApp = () => {
  return <LoadApp />;
};
export default LoadableApp;
