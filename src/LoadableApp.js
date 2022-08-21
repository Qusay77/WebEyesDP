import React from 'react';
import Loadable from 'react-loadable';
const LoadApp = Loadable({
  loader: () => import('./DataProductizationMain'),
  loading() {
    return <div>Loading...</div>;
  },
  timeout: 10000, // 10 seconds
});
const LoadableApp = () => {
  return <LoadApp />;
};
export default LoadableApp;
