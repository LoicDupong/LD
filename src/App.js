import logo from './logo.svg';
import './App.css';
import './components/simple-list/SimpleList.css';
import Welcome from './components/welcome/Welcome';
import SimpleList from './components/simple-list/SimpleList';
import{ nanoid } from "nanoid"
import SimpleListItem from './components/simple-list/SimpleListItem';

// cmd - npm start

function App() {

  // const pokemonNames = [
  //   {id: nanoid(), name : "Salamèche", type: "Feu", level : 12 },
  //   {id: nanoid(), name : "Carapuce", type: "Eau", level : 14},
  //   {id: nanoid(), name : "Bulbizarre", type: "Plante", level : 18}
  // ]

  const produitsList = [
    {id: nanoid(), name : "Pomme", prix: 2, promo:false},
    {id: nanoid(), name : "Banane", prix: 5, promo: false},
    {id: nanoid(), name : "Kiwi", prix: 1, promo: true}
  ]

  return (
    <div className="App">
     <Welcome name ="Jean"></Welcome>
     <SimpleList  produits = {produitsList}></SimpleList>
    
    </div>
  );
}




export default App;
