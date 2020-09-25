import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";


const PokemonList = props => {
    const { pokemon, nextPokemonList, previousPokemonList, fetchPokemonList } = props;
    const [currentList, setCurrentList] = useState("https://pokeapi.co/api/v2/pokemon/");

    useEffect(() => {
        fetchPokemonList(currentList);
    }, [currentList, fetchPokemonList, nextPokemonList])

    const nextClickHandler = event => {
        setCurrentList(nextPokemonList);
    }

    const previousClickHandler = event => {
        setCurrentList(previousPokemonList);
    }

    return(
        <>
            {pokemon.map(individualPokemon => {
                return <Pokemon name={individualPokemon.name} url={individualPokemon.url} />
            })}
            <button onClick={previousClickHandler}>Previous</button><button onClick={nextClickHandler}>Next</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        nextPokemonList: state.nextPokemonList,
        previousPokemonList: state.previousPokemonList,
        pokemonURLs: state.pokemonURLs
    }
}


export default connect(mapStateToProps, { fetchPokemonList })(PokemonList);