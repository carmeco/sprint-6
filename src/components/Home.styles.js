import styled from "styled-components";
import image from "../images/home.jpg";

export const Wrapper = styled.div`
    height: 100vh;
    background-image: url(${image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    all: initial;
    font-family: "Press Start 2P", cursive;
    font-size: var(--fontSuperBig);
    font-weight: bold;
    color: #fbdc3a;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
        animation: linear 1s scaleUp;
        transform: scale(5);
    }

    @keyframes scaleUp {
        from {
            transform: scale(1);
        }
    }

    @media (max-width: 992px) {
        font-size: var(--fontBig);
    }
`;
