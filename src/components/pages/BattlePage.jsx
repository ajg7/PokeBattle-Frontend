import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon, fetchPokemonTeam, fetchChallengerTeam, battle } from "../../store/actions/actions";
import { StyledOnDeck as StyledBattleCards } from "../../styles/StyledComponents/styledpages/StyledOnDeck";
import { StyledArena } from "../../styles/StyledComponents/styledpages/StyledArena";
import { BattleManager, scores } from "../../classes/BattleManager";


const BattlePage = props => {

    const { fetchPokemon, fetchPokemonTeam, fetchChallengerTeam, pokemonData, battle, outcome, teamData, challengerTeamData } = props;
    const [playedPokemon, setPlayedPokemon] = useState({});
    const [play, setPlay] = useState(false);
    const [challengerPokemon, setChallengerPokemon] = useState({});
    const [victor, setVictor] = useState(null);

    const dragStart = event => {
        const pokemon = event.target.src;
        const type1 = event.target.getAttribute("type1");
        const type2 = event.target.getAttribute("type2");
        const name = event.target.alt;
        setPlay(false);
        setPlayedPokemon({name: name, img: pokemon, type1: type1, type2: type2})
        setChallengerPokemon(challengerTeamData[Math.round(Math.random() * (challengerTeamData.length - 1))])
    }

    const drop = event => {
        setPlay(true);
        if (teamData.length > 0 || challengerTeamData.length > 0) {
            const outcome = BattleManager.evaluator(playedPokemon, challengerPokemon);
            battle(outcome);
            if (outcome.message === "player wins" || outcome.message === "draw- player wins tiebreaker") {
                scores.playerScore++;
            } else {
                scores.challengerScore++;
            }
        }
        if (scores.playerScore === 6) {
            setVictor("Player is the Pokemon Master!")
        } else if (scores.challengerScore === 6) {
            setVictor("Challenger is the Pokemon Master!")
        }
    }

    const dragOver = event => event.preventDefault();

    useEffect(() => {
        const currTeamId = localStorage.getItem("teamId");
        fetchPokemonTeam(currTeamId);
        fetchChallengerTeam();
    },[fetchPokemonTeam, fetchChallengerTeam, fetchPokemon])

    const restart = event => window.location.reload();    

    return (
        <>
        <StyledBattleCards>
                {teamData.map(member => {
                    return (
                            <div className="cards">
                                <div>
                                    <img src={member.imgURL} alt={member.name} type1={member.type1} type2={member.type2} onDragStart={dragStart} />
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
                <div className="player-team-slot" onDragOver={dragOver} onDrop={drop}>
                    {play ? <img src={playedPokemon.img} alt="player's pokemon" /> : null}
                </div>
                <div className="challenger-team-slot">
                    {play ? <img src={challengerPokemon.imgURL} alt="challenger's pokemon" /> : null}
                </div>
                <div>
                    <h3>{victor}</h3>
                </div>
                <div>
                    <h3>Player: {scores.playerScore}</h3>
                </div>
                <div>
                    <h3>Challenger: {scores.challengerScore}</h3>
                </div>
                <div>
                    <h3>{!victor ? outcome : null}</h3>
                </div>
            </StyledArena>
            <StyledBattleCards>
                {challengerTeamData.map(member => {
                    return (
                        <div className="cards">
                            <div>
                                <img src={member.imgURL} alt={member.name} draggable="false" />
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
            <button onClick={restart}>Restart Battle</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        teamData: state.teamData,
        challengerTeam: state.challengerTeam,
        challengerTeamData: state.challengerTeamData,
        outcome: state.outcome
    }
}

export default connect(mapStateToProps, { fetchPokemon, fetchPokemonTeam, fetchChallengerTeam, battle })(BattlePage);