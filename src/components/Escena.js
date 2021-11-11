import React from "react";

const Escena = ({ frases }) => {
    return (
        <div>
            {frases.map((frase) => (
                <p>{frase}</p>
            ))}
        </div>
    );
};

export default Escena;
