import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
   font-family: Montserrat;
  }
  p {
    margin: 0;
  }
  .react-tooltip {
    max-width: 280px;
    white-space : normal;
  }
`;
