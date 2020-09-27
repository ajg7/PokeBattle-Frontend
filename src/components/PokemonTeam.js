import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, pokemonTeam }) => {
    const history = useHistory();



    const goBackHandler = event => {
        history.push("/")
    }

    return(
        <div className="pokemon-team">
            {pokemonTeam.map(individualPokemon => {
                return <h2>{individualPokemon}</h2>
            })}
            <button onClick={goBackHandler}>Go Back</button>
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