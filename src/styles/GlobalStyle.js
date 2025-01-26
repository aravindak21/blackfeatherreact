// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none; /* Ensure no outline or border */
    background-color: #000000; /* Black background */
    font-family: 'Klein Regular', sans-serif;
    color: #ffffff; /* Default white text */
  }

  h1, h2, h3 {
    font-family: 'Alata Regular', sans-serif;
    color: #70E000; /* Green for headings */
  }
`;

export default GlobalStyle;
