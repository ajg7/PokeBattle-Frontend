import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon, fetchPokemonTeam, fetchOpponentTeam } from "../store/actions/actions";
import { StyledOnDeck as StyledBattleCards } from "../StyledComponents/StyledOnDeck";
import { StyledArena } from "../StyledComponents/StyledArena";


const BattlePage = props => {

    const { fetchPokemon, fetchPokemonTeam, fetchOpponentTeam, pokemonData, teamData, opponentTeam } = props;
    const [playedPokemon, setPlayedPokemon] = useState("");
    const [play, setPlay] = useState(false);
    const [opponent, setOpponent] = useState([]);

    /*
    Using the OpposingPokemon Class, I need to fetch data from db. Using a random number generator, select the index, 
    then fill out a new class instance with the pokemon's data
    
    
    
    */

    // const dragStart = event => {
    //     const pokemon = event.target.src;
    //     setPlay(false);
    //     setPlayedPokemon(pokemon)

    // }

    // const drop = event => {
    //     setPlay(true);
    // }

    // const dragOver = event => event.preventDefault();

    useEffect(() => {
        const currTeamId = localStorage.getItem("teamId");
        fetchPokemonTeam(currTeamId);
        fetchOpponentTeam();
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
                    {play ? <img src={playedPokemon} alt="player's pokemon" /> : null}
                </div>
                <div className="opponent-team-slot">
                    {play ? <img src={opponentTeam[Math.round(Math.random() * 5)].imgURL} alt="opponent's pokemon" /> : null}
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