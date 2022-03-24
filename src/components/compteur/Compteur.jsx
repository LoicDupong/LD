import { useState } from "react";

const Compteur = () => {

    const [value, setValue] = useState(0);

    const onIncrim = () => {
        setValue(prevValue => prevValue + 1);
    }

    const onReset = () => {
        setValue(0);
    }

    return(
        <div className="compteur">
            <h1>La valeur est {value}</h1>
            <button onClick={onIncrim}>+1</button>
            <button onClick={onReset} className={value == 0 ? "hidden" : ""} id="reset-btn">Reset</button>
        </div>
    );
}

export default Compteur