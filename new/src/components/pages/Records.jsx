import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { teamMembers, battle, whosThatPokemon } from "../../store/actions";
import { Button } from "../common/";
import { StyledRecords } from "../../styles/pages";

const Records = props => {
	const {
		getBattleData,
		pokemonInTeam,
		teamName,
		wins,
		losses,
		ties,
		battleAverage,
		bestScore,
		getTotalPoints,
		totalPoints,
	} = props;
	const params = useParams();
	const history = useHistory();
	const userId = localStorage.getItem("userId");

	const homeHandler = () => history.goBack();

	useEffect(() => {
		getBattleData(params.teamId);
		getTotalPoints(userId);
	}, [getBattleData, getTotalPoints, userId, params.teamId]);

	return (
		<StyledRecords>
			<header>
				<h2>Records Room</h2>
				<h3>{teamName}</h3>
			</header>
			<section>
				<h3>{`Total Points in Who's That Pokemon: ${totalPoints}`}</h3>
				<h3>Wins: {wins}</h3>
				<h3>Losses: {losses}</h3>
				<h3>Ties: {ties}</h3>
				<h3>
					Win/Loss Ratio:{" "}
					{isNaN(wins / losses) || wins / losses === Infinity ? 0 : wins / losses}
				</h3>
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
				<Button handleClick={homeHandler} buttonText={"Your Teams"} />
			</footer>
		</StyledRecords>
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
	getTotalPoints: PropTypes.func,
	totalPoints: PropTypes.number,
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
		totalPoints: state.whosThatPokemon.totalPoints,
	}),
	{
		getPokemonByTeam: teamMembers.getPokemonByTeam,
		getBattleData: battle.getBattleData,
		getTotalPoints: whosThatPokemon.getTotalPoints,
	}
)(Records);
