import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, pokemonTeam }) => {
    const history = useHistory();
    const [pokemonTeamData, setPokemonTeamData] = useState({})


    useEffect(() => {
        setPokemonTeamData(pokemonTeam.map(pokemonTeamMember => {
            return pokemon.filter(individualPokemon => {
                    if(pokemonTeamMember === individualPokemon.name) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }))
    }, [pokemonTeam, pokemon])

    console.log(pokemonTeamData)



    const goBackHandler = event => {
        history.push("/")
    }

    return(
        <div className="pokemon-team">
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