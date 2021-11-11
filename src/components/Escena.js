import React from "react";
import { Grid, GridElement, Wrapper } from "./Escena.styles";

const Escena = ({ frases }) => {
    return (
        <Wrapper>
            <Grid>
                {frases.map((frase) => (
                    <GridElement>{frase}</GridElement>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default Escena;
