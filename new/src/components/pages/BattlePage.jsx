import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { pokemon, teams } from "../../store/actions";

const BattlePage = props => {
	const params = useParams();
	const { currentTeam, fetchCurrentTeam, challengerTeam, makeChallengerTeam, teamName } = props;
	console.log(params, currentTeam, challengerTeam);

	useEffect(() => {
		fetchCurrentTeam(params.teamId);
	}, [fetchCurrentTeam]);

	return (
		<div>
			<header>
				<h3>{teamName}</h3>
				{currentTeam.map(pokemon => [
					<div key={pokemon.pokemon_Id}>
						<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
						<img src={pokemon.imgURL} alt={pokemon.name} />
						<button>{`I Choose ${
							pokemon.nickname ? pokemon.nickname : pokemon.name
						}!`}</button>
					</div>,
				])}
			</header>
			<section>
				<div>
					<h3>Arena</h3>
				</div>
			</section>
			<footer>
				<h3>Challengers</h3>
				{challengerTeam.map(pokemon => {
					return (
						<div key={pokemon.pokemon_Id}>
							<h3>{pokemon.name}</h3>
							<img src={pokemon.imgURL} alt={pokemon.name} />
							{/*<h4>{pokemon.type1}</h4>
						<h4>{pokemon.type2}</h4>*/}
						</div>
					);
				})}
				{/*Later when I put outcome in redux, make it so that when their is an outcome disabled === false*/}
				<button onClick={makeChallengerTeam} disabled={false}>
					Battle Again?
				</button>
			</footer>
		</div>
	);
};

BattlePage.propTypes = {
	currentTeam: PropTypes.array,
	challengerTeam: PropTypes.array,
	fetchCurrentTeam: PropTypes.func,
	makeChallengerTeam: PropTypes.func,
	teamName: PropTypes.string,
};

export default connect(
	state => ({
		currentTeam: state.teams.currentTeam,
		challengerTeam: state.pokemon.challengerTeam,
		teamName: state.teams.teamName,
	}),
	{
		fetchCurrentTeam: teams.fetchCurrentTeam,
		makeChallengerTeam: pokemon.makeChallengerTeam,
	}
)(BattlePage);
