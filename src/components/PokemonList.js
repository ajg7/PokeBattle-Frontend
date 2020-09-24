import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Pokemon from "./Pokemon";


const PokemonList = props => {
    const { pokemon } = props;

    return(
        <>
            {pokemon.map(individualPokemon => {
                return <Pokemon name={individualPokemon.name} />
            })}
            
            <button>Previous</button>
            <button>Next</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon
    }
}


export default connect(mapStateToProps, {})(PokemonList);