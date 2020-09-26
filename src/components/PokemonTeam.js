import React, { useState } from "react";
import { connect } from "react-redux";

const PokemonTeam = ({ pokemon, pokemonTeam }) => {

    
    return(
        <div className="pokemon-team">
        </div>
    )
}


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        pokemonTeam: state.pokemonTeam
    }
}

export default connect(mapStateToProps, {})(PokemonTeam);