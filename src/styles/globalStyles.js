import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Game";
    src: url(/fonts/Gameboi95.ttf) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Game";
  }
`;

export default GlobalStyle;
