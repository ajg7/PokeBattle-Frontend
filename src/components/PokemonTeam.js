import React from "react";
import { connect } from "react-redux";

const PokemonTeam = ({ pokemon }) => {
    console.log(pokemon)
    return(
        <div className="pokemon-team">
            <h2>Your Team</h2>

        </div>
    )
}


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {})(PokemonTeam);