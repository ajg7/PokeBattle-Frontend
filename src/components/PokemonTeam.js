import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, pokemonTeam, pokemonDataObject }) => {
    const history = useHistory();
    const [pokemonTeamData, setPokemonTeamData] = useState([]);
    const [pokemonObject, setPokemonObject] = useState(pokemonDataObject);
    // const [url, setUrl] = useState("");
    // const [name, setName] = useState("");

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
            console.log(pokemonObject)
    }, [pokemonTeam, pokemon, pokemonObject])

    useEffect(() => {
        // setUrl(pokemonTeamData.map(individualPokemon => {
        //     return individualPokemon[0].url
        // }))
        // setName(pokemonTeamData.map(individualPokemon => {
        //     return individualPokemon[0].name
        // }))
    },[pokemonTeamData])




    const goBackHandler = event => {
        history.push("/")
    }

    return(
        <div className="pokemon-team">
            {pokemonTeamData.map(individualPokemon => {
                return <h3>{individualPokemon[0].name}</h3>
            })}
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    )
}
 

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        pokemonTeam: state.pokemonTeam,
        pokemonDataObject: state.pokemonDataObject
    }
}


export default connect(mapStateToProps, {})(PokemonTeam);