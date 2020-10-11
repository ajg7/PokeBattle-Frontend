import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../css/teamStyles.css";

const PokemonTeam = ({ pokemon, pokemonTeam, pokemonDataObject }) => {
    const history = useHistory();
    const [pokemonObject, setPokemonObject] = useState(pokemonDataObject);
    const [pokemonFetchData, setPokemonFetchData] = useState([]);

    useEffect(() => {
        axios.get("https://pokemon-server-ajg7.herokuapp.com/pokemon_team_members")
            .then(response => {
                console.log(response.data)
                const data = response.data;
                setPokemonFetchData(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [pokemonTeam, pokemon, pokemonObject])


    const goBackHandler = event => {
        history.push("/")
    }

    const removePokemonHandler = event => {
        const id = event.target.value;
        axios.delete(`https://pokemon-server-ajg7.herokuapp.com/pokemon_team_members/${id}`)
            .then(response => {
                console.log(response)
                history.go(0);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <div className="pokemon-team-page">
            <div className="pokemon-team">
                {pokemonFetchData.map(individualPokemon => {
                    return (
                        <div className="pokemon-team-members">
                            <img src={individualPokemon.ImgUrl} alt={individualPokemon.name} />
                            <p>{individualPokemon.Name}</p>
                            <p>{individualPokemon.Type1}</p>
                            <p>{individualPokemon.Type2}</p>
                            <p>{individualPokemon.PokemonNumber}</p>
                            <button onClick={removePokemonHandler} value={individualPokemon.id}>Remove From Team</button>
                        </div>
                        )
                })}
            </div>
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