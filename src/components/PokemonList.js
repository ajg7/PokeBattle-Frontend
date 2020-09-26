import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPokemonList, filterPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";
import "../css/styles.css";


const PokemonList = props => {
    const { pokemon, nextPokemonList, previousPokemonList, fetchPokemonList } = props;
    const [currentList, setCurrentList] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151");
    
    useEffect(() => {
        fetchPokemonList(currentList);
    }, [currentList, fetchPokemonList, nextPokemonList])

    return(
        <>
            {pokemon.map(individualPokemon => {
                return <Pokemon name={individualPokemon.name} url={individualPokemon.url} />
            })} 
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        nextPokemonList: state.nextPokemonList,
        previousPokemonList: state.previousPokemonList,
    }
}




export default connect(mapStateToProps, { fetchPokemonList })(PokemonList);