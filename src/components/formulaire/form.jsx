import { useState } from "react";

const Exempleinput = function () {
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="msg">Entrez un message</label>
            <input type="text" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)} />

            <input type="submit" value="Envoyer" />

        </form>
    );
}

const ExempleSelect = function(){
    const [choice, setChoice] = useState('pikachu');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="pokemon">Quel est votre Pokémon ?</label>
            <select id="pokemon" value={choice} onChange={(e) => setChoice(e.target.value)}>
                <option value="taupiqueur">Taupiqueur</option>
                <option value="pikachu">Pikachu</option>
                <option value="tortank">Tortank</option>

            </select>

            <input type="submit" value="Envoyer" />
        </form>
    );

}

export default ExempleSelect;

// // Plusieurs Hook d'état 
// const MultiField = function () {
//     const [msg, setMsg] = useState('');
//     const [choice, setChoice] = useState('pikachu');
//     const ... = useState(false)
// }