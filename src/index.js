import React from 'react';
import ReactDOM from 'react-dom/client';
import DPMain from './DataProductizationMain';
import LoadableApp from './LoadableApp';

const root = ReactDOM.createRoot(document.getElementsByClassName('video')[0]);
root.render(
  <React.StrictMode>
    <DPMain />
  </React.StrictMode>,
);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./DataProductizationMain', () => {
    root.render(
      <React.StrictMode>
        <LoadableApp />
      </React.StrictMode>,
    );
  });
}
