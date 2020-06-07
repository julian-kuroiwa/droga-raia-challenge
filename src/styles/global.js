import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #F4F6F8;
    font-display: swap;
  }

  body,
  input,
  button {
    font: 16px 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
