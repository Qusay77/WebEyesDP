import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './ui/theme';
import GlobalCSS from './ui/theme/global.css';
import store from './redux/configureStore';
import Main from './ui/pages/main';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
