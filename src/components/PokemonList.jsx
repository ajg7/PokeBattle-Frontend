import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../store/actions/actions";
import Pokemon from "./Pokemon";
import DropBar from "./DropBar";
import { StyledCards } from "../StyledComponents/StyledCards";
import { StyledBar } from "../StyledComponents/StyledBar";


const PokemonList = props => {
    const { pokemonData, loading, error, fetchPokemon } = props;

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return(
        <>
            <section className="drop-bar">
                <StyledBar>
                    <DropBar />
                </StyledBar>
            </section>
            <section className="pokemon-cards">
            {loading ? <h3>Loading...</h3> : null}
            {error ? <h3>{error}</h3> : null}
            <StyledCards>
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

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        loading: state.loadingPokemon,
        error: state.error
    }
}


export default connect(mapStateToProps, { fetchPokemon })(PokemonList);