import SimpleListItem from "./SimpleListItem"

// const SimpleList = function(props) {
//     const { pokemons } = props

//     const pokemonsJSX =  pokemons.map(
//         p => <SimpleListItem key={p.id}
//                 name={p.name}
//                 type={p.type}
//                 level={p.level}></SimpleListItem>
//     )

//     return (
//         <div>
//             {pokemonsJSX}
//         </div>
//     )

// }

const SimpleList = function(props){
    const { produits } = props

    const produitsJSX = produits.map(
        p => <SimpleListItem key={p.id}
                name={p.name}
                prix={p.prix}
                promo={p.promo}>
                </SimpleListItem>
            
    )

    return (
        <div>
            {produitsJSX}
        </div>
    )
}

export default SimpleList