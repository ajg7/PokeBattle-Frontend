import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon, fetchPokemonTeam, fetchOpponentTeam } from "../store/actions/actions";
import { OpposingPokemon } from "../classes/OpposingPokemon";
import { BattleManager } from "../classes/BattleManager";
import { StyledOnDeck as StyledBattleCards } from "../StyledComponents/StyledOnDeck";
import { StyledArena } from "../StyledComponents/StyledArena";


const BattlePage = props => {

    const { fetchPokemon, fetchPokemonTeam, fetchOpponentTeam, pokemonData, teamData, opponentTeam } = props;
    /*
    Using the OpposingPokemon Class, I need to fetch data from db. Using a random number generator, select the index, 
    then fill out a new class instance with the pokemon's data
    
    
    
    */
    useEffect(() => {
        const currTeamId = localStorage.getItem("teamId");
        fetchPokemonTeam(currTeamId);
        fetchOpponentTeam()
    },[fetchPokemonTeam, fetchOpponentTeam, fetchPokemon])

    

    return (
        <>
        <StyledBattleCards>
                {teamData.map(member => {
                    return (
                            <div className="cards">
                                <div>
                                    <img src={member.imgURL} alt={member.name} />
                                </div> 
                                <h3>{member.pokemon_Id}</h3>
                                <span className="pokemon-name">
                                    <h2>{member.nickname ? member.nickname : member.name}</h2>
                                </span>
                                <h3>{member.type1}</h3>
                                <h3>{member.type2}</h3>
                            </div>
                    )
                })}
            </StyledBattleCards>
            <StyledArena>
                <div className="player-team-slot">

                </div>
                <div className="opponent-team-slot">
                
                </div>
            </StyledArena>
            <StyledBattleCards>
                {opponentTeam.map(member => {
                    return (
                        <div className="cards">
                            <div>
                                <img src={member.imgURL} alt={member.name} />
                            </div> 
                            <h3>{member.pokemon_Id}</h3>
                            <span className="pokemon-name">
                                <h2>{member.nickname ? member.nickname : member.name}</h2>
                            </span>
                            <h3>{member.type1}</h3>
                            <h3>{member.type2}</h3>
                        </div>
                    )
                })}
            
            </StyledBattleCards>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        teamData: state.teamData,
        opponentTeam: state.opponentTeam
    }
}

export default connect(mapStateToProps, { fetchPokemon, fetchPokemonTeam, fetchOpponentTeam })(BattlePage);