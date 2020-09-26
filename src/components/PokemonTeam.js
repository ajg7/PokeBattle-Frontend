import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonTeam = ({ pokemon, chosenPokemon }) => {
    console.log(chosenPokemon)
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const history = useHistory();
    


    const goBackHandler = event => {
        history.push("/")
    }

    return(
        <div className="pokemon-team">
            <h2>{chosenPokemon}</h2>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        chosenPokemon: state.chosenPokemon
    }
}

export default connect(mapStateToProps, {})(PokemonTeam);