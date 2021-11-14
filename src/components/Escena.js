import React from "react";
import { Wrapper, SentecesBox, Sentece, Btn, BtnBox } from "./Escena.styles";
import { useState } from "react";

const Escena = ({ frases }) => {
    const [count, setCount] = useState(0);

    return (
        <Wrapper background={frases[count].image}>
            <SentecesBox>
                {frases.map((frase, index) => (
                    <Sentece
                        key={index}
                        featured={index === count ? true : false}
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
