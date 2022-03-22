// const SimpleListItem = function(props){
    
//     const {name, type, level} = props

//     return (
//         <ul>
//             <li>Nom : {name}</li>
//             <li>Type : {type}</li>
//             <li>Niveau : {level}</li>

//         </ul>
//     )

// }

const SimpleListItem = function(props){

    const {name, prix, promo} = props

    return(
        <ul>
            <li>{name} | <span className={promo ? "promo" : ""}>Prix : {prix}€</span> {promo}</li>
        </ul>
    )

}

export default SimpleListItem