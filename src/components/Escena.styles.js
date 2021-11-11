import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 2rem auto;
`;

export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: center;
`;

export const GridElement = styled.p`
    text-align: center;
    padding: 0.6rem;
    border: 1px solid var(--darkGrey);
    border-radius: 1rem;
`;
