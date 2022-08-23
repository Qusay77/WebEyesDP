/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadableApp from './LoadableApp';

const root = ReactDOM.createRoot(document.getElementsByTagName('section')[0]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    root.render(
      <React.StrictMode>
        <LoadableApp />
      </React.StrictMode>,
    );
  });
}
