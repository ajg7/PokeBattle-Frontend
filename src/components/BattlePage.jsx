import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../store/actions/actions";
import { OpposingPokemon } from "../components/classes/OpposingPokemon";
import { BattleManager } from "../components/classes/BattleManager";

const BattlePage = props => {

    const { fetchPokemon, pokemonData } = props;
    /*
    Using the OpposingPokemon Class, I need to fetch data from db. Using a random number generator, select the index, 
    then fill out a new class instance with the pokemon's data
    
    
    
    */


    const player = new BattleManager(0)
    const opponent = new BattleManager(0);
    console.log(player.theScore = 1)


        const opponentTeam = [
            pokemonData[BattleManager.random()], pokemonData[BattleManager.random()], pokemonData[BattleManager.random()],
            pokemonData[BattleManager.random()], pokemonData[BattleManager.random()], pokemonData[BattleManager.random()]
        ]
        console.log(opponentTeam)
    

    return (
        <>
        <button>Make Random Team</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
}

export default connect(mapStateToProps, { fetchPokemon })(BattlePage);