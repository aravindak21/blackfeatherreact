// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Klein Regular', sans-serif;
    background-color: #000000; /* Black background */
    color: #ffffff; /* Default white text */
  }
  h1, h2, h3 {
    font-family: 'Alata Regular', sans-serif;
    color: #70E000; /* Green for headings */
  }
`;

export default GlobalStyle;
