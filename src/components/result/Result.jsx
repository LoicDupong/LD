import { useEffect, useState } from "react";

const Result = function(props){
     // Props
     const { name } = props

     // State
     const [age, setAge] = useState("Chercher un nom")
 
     useEffect(() => {
         fetch("https://api.agify.io?name=" + name)
             .then(response => response.json())
             .then(data => {
                 const ageData = data.age
                 setAge(ageData)
             })
     }, [name])
 
     return (
         <h3>L'âge prédit est de : {age}</h3>
     )
}

export default Result