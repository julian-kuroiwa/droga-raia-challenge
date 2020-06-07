import { createGlobalStyle } from 'styled-components';

import Background from '../assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #F4F6F8;
    font-display: swap;
  }

  #root {
    background: url(${Background});
    width: 100%;
    height: 100vh;
  }

  body,
  input,
  button {
    font: 16px 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
