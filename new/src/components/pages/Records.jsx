import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { teamMembers, battle } from "../../store/actions";

const Records = props => {
	const { getPokemonByTeam, getBattleData, pokemonInTeam, teamName, wins, losses, ties } = props;
	const params = useParams();
	useEffect(() => {
        getPokemonByTeam(params.teamId);
        getBattleData(params.teamId);
	}, [getPokemonByTeam, getBattleData]);
	return (
		<div>
			<header>
                <h2>Records Room</h2>
                <h3>{teamName}</h3>
			</header>
            <section>
            <h3>Wins: {wins}</h3>
            <h3>Losses: {losses}</h3>
            <h3>Ties: {ties}</h3>
            <h3>Win/Loss Ratio: {wins/losses}</h3>
            <h3>Average Score: </h3>
            <h3>Best Score: </h3>
            {pokemonInTeam.map(pokemon => {
                return (
                    <div key={pokemon.pokemon_Id}>
                    <img src={pokemon.imgURL} alt={pokemon.name} />
                    <h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
                    </div>
                );
            })}
            </section>
			<footer></footer>
		</div>
	);
};

Records.propTypes = {
	getPokemonByTeam: PropTypes.func,
    pokemonInTeam: PropTypes.array,
    teamName: PropTypes.string,
    getBattleData: PropTypes.func,
    wins: PropTypes.number,
    losses: PropTypes.number,
    ties: PropTypes.number
};

export default connect(
	state => ({
        pokemonInTeam: state.teamMembers.pokemonInTeam,
        teamName: state.teams.teamName,
        wins: state.battle.wins,
        losses: state.battle.losses,
        ties: state.battle.ties
	}),
	{
        getPokemonByTeam: teamMembers.getPokemonByTeam,
        getBattleData: battle.getBattleData
	}
)(Records);
