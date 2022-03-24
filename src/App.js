import logo from './logo.svg';
import './App.css';
import './components/simple-list/SimpleList.css';
import Welcome from './components/welcome/Welcome';
import SimpleList from './components/simple-list/SimpleList';
import{ nanoid } from "nanoid"
import SimpleListItem from './components/simple-list/SimpleListItem';
import Compteur from './components/compteur/Compteur';
import Exempleinput from './components/formulaire/form';
import ExempleSelect from './components/formulaire/form';
import Calculatrice from './components/calculatrice/calculatrice';
import FormTodo from './components/todo-list/FormTodo';
import ListTodo from './components/todo-list/ListTodo';
import { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';
import Result from './components/result/Result';
import WResult from './components/weather-api/weather-result/weatherResult';
import WeatherSB from './components/weather-api/weather-searchBar/weatherSB';

// cmd - npm start

function App() {

  const [tasks, setTasks] = useState([])

  const produitsList = [
    {id: nanoid(), name : "Pomme", prix: 2, promo:false},
    {id: nanoid(), name : "Banane", prix: 5, promo: false},
    {id: nanoid(), name : "Kiwi", prix: 1, promo: true}
  ]


  
  const ajouterTache = (tache) => {
    setTasks(previousTasks => [...previousTasks, tache])
  }

  const deleteTache = (id) => {

    function filterByID(obj){
      if (obj.id !== id){
        return true;
      } else {
        return false;
      }
    }
    setTasks(tasks.filter(filterByID));

    console.log("Delete")
  }

  const doneTache = (id) => {
    setTasks(previousTasks => previousTasks.map(
      p => (p.id !== id) ? p : {...p, isDone : true}
            
    ))
  }


  const [n, setN] = useState("")

  const searchName = function(name){
    setN(name)
  }

  const [city, setCity] = useState("")

  const searchCity = function(cityN){
    setCity(cityN)
  }


  return (
    <div className="App">
     <Welcome name ="Jean"></Welcome>
     <SimpleList  produits = {produitsList}></SimpleList>
     <Compteur></Compteur>
     {/* <Exempleinput></Exempleinput> */}
     <ExempleSelect></ExempleSelect>
     <Calculatrice></Calculatrice>

      <div className='todolist-container'>
        <FormTodo onSubmit={ajouterTache}></FormTodo>
        <ListTodo tasks = {tasks} onDelete={deleteTache} onDone={doneTache} ></ListTodo>
      </div>

      <SearchBar onSearch={searchName}></SearchBar>
      <Result name={n}></Result>

      <WeatherSB onSearchW={searchCity}></WeatherSB>
      <WResult city={city}></WResult>
    </div>
  );
}




export default App;
