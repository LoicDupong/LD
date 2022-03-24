const { useState } = require("react")

const SearchBar = function(props){

    const { onSearch } = props

    const [name, setName] = useState("")


    return(
        <div>
            <h1>Search Bar API</h1>
            <input type="text" name="" id="" value={name} placeholder="Insérez un nom" onChange={(e) => setName(e.target.value)}/>
            <input type="button" value="Search" onClick={() => onSearch(name)}/>
        </div>
    );
}

export default SearchBar
