import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchPokemonList } from "../store/actions"
import Pokemon from "./Pokemon";
import DropBar from "./DropBar";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { StyledCards } from "../StyledComponents/StyledCards";
import { StyledBar } from "../StyledComponents/StyledBar";


const PokemonList = props => {
    // const { pokemon, fetchPokemonList } = props;
    const [pokemonData, setPokemonData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        //convert this code into an action (fetchPokemon)
        axiosWithAuth().get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
            .then(response => setPokemonData(response.data))
            .catch(error => setError(true))
    }, [])


    return(
        <>
            <section className="drop-bar">
                <StyledBar>
                    <DropBar />
                </StyledBar>
            </section>
            <section className="pokemon-cards">
            <StyledCards>
                {error ? <h2>Unable to Load Pokemon</h2> : null}
                {pokemonData.map(pokemon => {
                    return (
                        <Pokemon 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        type1={pokemon.type1}
                        type2={pokemon.type2}
                        imgURL={pokemon.imgURL}
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
            </StyledCards>
            </section>
        </>
    )
}





export default PokemonList;