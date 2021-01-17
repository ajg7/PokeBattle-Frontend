import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { team, teamMembers, pokemon } from "../../store/actions";
import { Pokemon } from "../common";
import { DropBar } from "../pages";
import { StyledCards } from "../../styles/StyledComponents/styledCommon";
import { StyledBar } from "../../styles/StyledComponents/styledPages";


const PokemonList = props => {
    const { pokemonData, loading, currIndex, userId, setSelectedPokemon, fetchPokemon, removePokemon, fetchTeamId } = props;
    const [pokemonHasBeenRemoved, setPokemonHasBeenRemoved] = useState(false);
    const [page, setPage] = useState(true);

    const dragOver = event => event.preventDefault();
    
    const dragEnd = event => setPokemonHasBeenRemoved(true);

    const drop = event => {
        removePokemon(currIndex, pokemonHasBeenRemoved);
        setPokemonHasBeenRemoved(false);
        setSelectedPokemon({});
    }

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon])

    return(
        <>
            <section className="drop-bar">
                <StyledBar>
                    <DropBar />
                </StyledBar>
            </section>
            <section className="pokemon-cards" onDragOver={dragOver} onDrop={drop}>
            {loading ? <h3>Loading...</h3> : null}
            <StyledCards page={page}>
                {pokemonData.map(pokemon => {
                    return (
                        <Pokemon 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        number={pokemon.number}
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

export default connect(
    state => ({
        pokemonData: state.pokemon.pokemonData,
        teamId: state.teamId,
        userId: state.userId,
        currIndex: state.currIndex
    }), { 
        fetchPokemon: pokemon.fetchPokemon, 
        removePokemon: teamMembers.removePokemon,
        setSelectedPokemon: teamMembers.setSelectedPokemon, 
        fetchTeamId: team.fetchTeamId
    })(PokemonList);