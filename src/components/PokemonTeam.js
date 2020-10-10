import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, pokemonTeam }) => {
    const history = useHistory();
    const [pokemonTeamData, setPokemonTeamData] = useState([]);
    const [url, setUrl] = useState("");
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
    }, [pokemonTeam, pokemon])

    useEffect(() => {
        setUrl(pokemonTeamData.map(individualPokemon => {
            return individualPokemon[0].url
        }))
        // setName(pokemonTeamData.map(individualPokemon => {
        //     return individualPokemon[0].name
        // }))
    },[pokemonTeamData])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
            })
    },[url])

    console.log(pokemonTeamData)
    console.log(url)



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