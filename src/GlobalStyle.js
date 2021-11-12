import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";

export const GLobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Lobster', cursive;
    }

    body {
        background-color: var(---lightGrey);
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    button {
        font-family: 'Press Start 2P', cursive;
    }
`;
