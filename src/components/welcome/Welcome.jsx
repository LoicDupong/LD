import "./Welcome.css"

const Welcome = function(props) {
    // Logique du composant
    const { name } = props


    // Rendu du composant
    return (

            <div>
                <h1 className="bonjour">Bienvenue {name} sur l'application React!</h1>
                <p>Voici une liste de produits</p>
            </div>

        
    );
};


Welcome.defaultProps = {
    name : "Paul",
    age : 18
}

export default Welcome