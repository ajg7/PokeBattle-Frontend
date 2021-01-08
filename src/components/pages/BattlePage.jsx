import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pokemon, battle, team } from "../../store/actions/";
import { StyledCards } from "../../styles/StyledComponents/styledCommon";
import { StyledArena } from "../../styles/StyledComponents/styledPages";
import { BattleManager, scores } from "../../classes/BattleManager";
import { Pokemon, Button } from "../common";


const BattlePage = props => {

    const { fetchPokemon, fetchPokemonTeam, fetchChallengerTeam, battle, outcome, teamData, challengerTeamData } = props;
    const [playedPokemon, setPlayedPokemon] = useState({});
    const [play, setPlay] = useState(false);
    const [challengerPokemon, setChallengerPokemon] = useState({});
    const [victor, setVictor] = useState(null);

    const dragStart = event => {
        const pokemon = event.target.imgURL;
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

    const restart = event => {
        window.location.reload();
        window.scrollTo(0, 0);
    }    

    return (
        <>
        <StyledCards>
                {teamData.map(member => {
                    return (
                        <Pokemon 
                        key={member.id}
                        id={member.id}
                        name={member.name}
                        number={member.number}
                        type1={member.type1}
                        type2={member.type2}
                        imgURL={member.imgURL}
                        height={member.height}
                        weight={member.weight}
                        entry={member.entry}
                        habitat={member.habitat}
                        legendary={member.legendary}
                        mythical={member.mythical}
                        ancient={member.ancient}
                        className="player-pokemon"
                        dragStart={dragStart}
                        />
                    )
                })}
            </StyledCards>
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
            <StyledCards>
                {challengerTeamData.map(challenger => {
                    return (
                        <Pokemon 
                        key={challenger.id}
                        id={challenger.id}
                        name={challenger.name}
                        number={challenger.number}
                        type1={challenger.type1}
                        type2={challenger.type2}
                        imgURL={challenger.imgURL}
                        height={challenger.height}
                        weight={challenger.weight}
                        entry={challenger.entry}
                        habitat={challenger.habitat}
                        legendary={challenger.legendary}
                        mythical={challenger.mythical}
                        ancient={challenger.ancient}
                        className="challenger-pokemon"
                        />
                    )
                })}
            </StyledCards>
            <Button 
            handleClick={restart}
            isDisabled={false}
            classType="restart-button"
            buttonText={"Restart!"}
            />
        </>
    )
}

export default connect(
    state => ({
        pokemonData: state.pokemon.pokemonData,
        teamData: state.team.teamData,
        challengerTeam: state.battle.challengerTeam,
        challengerTeamData: state.battle.challengerTeamData,
        outcome: state.battle.outcome
    }), { 
        fetchPokemon: pokemon.fetchPokemon, 
        fetchPokemonTeam: team.fetchPokemonTeam, 
        fetchChallengerTeam: battle.fetchChallengerTeam, 
        battle: battle.battle 
    })(BattlePage);