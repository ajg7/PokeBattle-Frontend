import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { teamMembers, battle, teams } from "../../store/actions";

const Records = props => {
	const {
		getPokemonByTeam,
		getBattleData,
		fetchTeamById,
		pokemonInTeam,
		teamName,
		wins,
		losses,
		ties,
		battleAverage,
		bestScore,
	} = props;
	const params = useParams();
	const history = useHistory();

	const homeHandler = () => history.goBack();

	useEffect(() => {
		getPokemonByTeam(params.teamId);
		getBattleData(params.teamId);
	}, [getPokemonByTeam, getBattleData, fetchTeamById]);

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
				<h3>Win/Loss Ratio: {isNaN(wins / losses) ? 0 : wins / losses}</h3>
				<h3>Average Score: {isNaN(battleAverage) ? 0 : battleAverage}</h3>
				<h3>Best Score: {bestScore === -Infinity ? 0 : bestScore}</h3>
				{pokemonInTeam.map(pokemon => {
					return (
						<div key={pokemon.pokemon_Id}>
							<img src={pokemon.imgURL} alt={pokemon.name} />
							<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
						</div>
					);
				})}
			</section>
			<footer>
				<button onClick={homeHandler}>Home</button>
			</footer>
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
	ties: PropTypes.number,
	battleAverage: PropTypes.number,
	bestScore: PropTypes.number,
	fetchTeamById: PropTypes.func,
};

export default connect(
	state => ({
		pokemonInTeam: state.teamMembers.pokemonInTeam,
		teamName: state.teams.teamName,
		wins: state.battle.wins,
		losses: state.battle.losses,
		ties: state.battle.ties,
		battleAverage: state.battle.battleAverage,
		bestScore: state.battle.bestScore,
	}),
	{
		getPokemonByTeam: teamMembers.getPokemonByTeam,
		getBattleData: battle.getBattleData,
		fetchTeamById: teams.fetchTeamById,
	}
)(Records);
