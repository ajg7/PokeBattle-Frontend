import React, { useState, useEffect } from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { fetchPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../css/reset.css";
import "../css/styles.css";


const PokemonList = props => {
    // const { pokemon, fetchPokemonList } = props;
    const [pokemonData, setPokemonData] = useState([])
    
    
    // useEffect(() => {
    //     fetchPokemonList(currentList);
    // }, [currentList, fetchPokemonList])


    useEffect(() => {
        axiosWithAuth().get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
            .then(response => setPokemonData(response.data))
    }, [])

    return(
        <>
            {pokemonData.map(pokemon => {
                return (
                    <Pokemon 
                    name={pokemon.name}
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                    imgURL={pokemon.imgURL}
                    number={pokemon.number}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    entry={pokemon.entry}
                    habitat={pokemon.habitat}
                    legendary={pokemon.legendary}
                    mythical={pokemon.mythical}
                    ancient={pokemon.ancient}
                    />
                )
            })}
        </>
    )
}





export default PokemonList;