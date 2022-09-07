/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadableApp from './LoadableApp';

const rootElement = document.getElementsByTagName('section')[0];
const root = ReactDOM.createRoot(rootElement);
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
