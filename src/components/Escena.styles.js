import styled, { css } from "styled-components";

const grid = css`
    display: grid;
    gap: 1rem;
    justify-content: center;
`;

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 2rem auto;
`;

export const SentecesBox = styled.div`
    ${grid}
    grid-template-columns: 1fr;
`;

export const Sentece = styled.p`
    text-align: center;
    padding: 0.6rem;
    border: 1px solid var(--darkGrey);
    border-radius: 1rem;
    background-color: ${({ featured }) => (featured ? "orange" : "white")};
`;

export const BtnBox = styled.div`
    ${grid};
    grid-template-columns: 1fr 1fr;
`;

export const Btn = styled.button`
    margin-top: 1rem;
    padding: 0.6rem;
    border-radius: 1rem;

    &:hover {
        cursor: pointer;
    }
`;
