import react, { useState } from "react";
import Home from "./components/Home";
import Escena from "./components/Escena";
import frases from "./data/frases.json";

function App() {
    const [state, setState] = useState(true);

    return state ? (
        <Home start={() => setState(!state)} />
    ) : (
        <Escena frases={frases} />
    );
}

export default App;
