import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    color: inherit;
  }

  html, body {
    height: 1px;
    min-height: 100%;
  }

  html {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fbfbfb;
    background-color: #161616;
  }
`;