import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        background-color: var(---lightGrey);
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
`;
