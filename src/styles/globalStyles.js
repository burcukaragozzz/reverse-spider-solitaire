import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Game";
        src: url(/fonts/Slackey-Regular.ttf) format('truetype');
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Game";
        height: 100vh;
    }

    #root,
    .App {
        height: 100%;
    }

    a {
        text-decoration: none;
        z-index: 1;
    }
`;

export default GlobalStyle;
