import React from "react";
import { Wrapper, SentecesBox, Sentece, Btn, BtnBox } from "./Escena.styles";
import { useState } from "react";

const Escena = ({ frases }) => {
    const [count, setCount] = useState(0);

    return (
        <Wrapper>
            <SentecesBox>
                {frases.map((frase) => (
                    <Sentece
                        key={frase.id}
                        featured={frase.id === count ? true : false}
                    >
                        {frase.text}
                    </Sentece>
                ))}
            </SentecesBox>
            <BtnBox>
                <Btn onClick={() => setCount(count > 0 ? count - 1 : count)}>
                    Anterior
                </Btn>
                <Btn
                    onClick={() =>
                        setCount(count < frases.length - 1 ? count + 1 : count)
                    }
                >
                    Següent
                </Btn>
            </BtnBox>
        </Wrapper>
    );
};

export default Escena;
