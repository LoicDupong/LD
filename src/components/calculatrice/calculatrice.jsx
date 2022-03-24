import { useState } from "react";
// input + Select + input + button OnClick + input Readonly

const Calculatrice = function (){
    const [nb1, setNb1] = useState('');
    const [choice, setChoice] = useState('+');
    const [nb2, setNb2] = useState('');
    const [result, setResult] =  useState('')  


    const handleNumberInput = (e) => {
        const number1 = e.target.value;
        setNb1(number1);
    }

    const handleNumber2Input = (e) => {
        const number2 = e.target.value;
        setNb2(number2);
       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        switch(choice){
            case "+" : 
                setResult(parseInt(nb1) + parseInt(nb2));
                console.log(choice, result)
                break;
            case "-" :
                setResult(parseInt((nb1)-(nb2)));
                console.log(choice, result)
                break;
            case "/" :
                setResult(parseInt((nb1)/(nb2)));
                console.log(choice, result)
                break;
            case "*" :
                setResult(parseInt((nb1)*(nb2)));
                console.log(choice, result)
                break;
        }
    }
    


    return(
        <div className="calculatrice">
        <h1>Calculatrice</h1>
        <form action="" onSubmit={handleSubmit}>
            <div id="nb1-container">
                <label htmlFor="nb1">Entrez un nombre</label>
                <input type="number" id="nb1" value={nb1} onChange={handleNumberInput} />
            </div>

            <select name="operateur" id="operateur" value={choice} onChange={(e) => setChoice(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>

            <div id="nb2-container">
                <label htmlFor="nb2">Entrez un nombre</label>
                <input type="number" id="nb2" value={nb2} onChange={handleNumber2Input} />
            </div>
            <input type="submit" value="=" />

            <input type="number" id="result" value={result} placeholder="Résultat..." readOnly/>

        </form>
        </div>
    );
}

export default Calculatrice;
