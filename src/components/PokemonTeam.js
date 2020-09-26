import React from "react";
import { connect } from "react-redux";

const PokemonTeam = ({ pokemon, chosenPokemon }) => {
console.log(chosenPokemon)
    
    return(
        <div className="pokemon-team">
            <h2>{chosenPokemon}</h2>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        chosenPokemon: state.chosenPokemon
    }
}

export default connect(mapStateToProps, {})(PokemonTeam);