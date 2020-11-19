import React from "react";
import { OpposingPokemon } from "../components/classes/OpposingPokemon";
import { BattleManager } from "../components/classes/BattleManager";

const BattlePage = props => {
    /*
    Using the OpposingPokemon Class, I need to fetch data from db. Using a random number generator, select the index, 
    then fill out a new class instance with the pokemon's data
    
    
    
    */

    const player = new BattleManager(0)
    const opponent = new BattleManager(0);
    console.log(player.theScore = 1)


    return (
        <>
        </>
    )
}

export default BattlePage;