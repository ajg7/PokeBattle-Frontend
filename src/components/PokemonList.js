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
        window.scrollTo(0,0)
    }

    const previousClickHandler = event => {
        setCurrentList(previousPokemonList);
        window.scrollTo(0,0)
    }


    return(
        <>
            {pokemon.map(individualPokemon => {
                return <Pokemon name={individualPokemon.name} url={individualPokemon.url} />
            })}
            <button onClick={previousClickHandler}>Previous</button>
            <button onClick={currentList === "https://pokeapi.co/api/v2/pokemon/?offset=140&limit=20" ? null : nextClickHandler}>Next</button>
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