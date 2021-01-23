import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { pokemon, teams } from "../../store/actions";
import types from "../../utils/types";
import { Arena } from "../common";

const BattlePage = props => {
	const params = useParams();
	const { currentTeam, fetchCurrentTeam, challengerTeam, makeChallengerTeam, teamName } = props;
	const [selectedPokemon, setSelectedPokemon] = useState({});
	const [challengerPokemon, setChallengerPokemon] = useState({});

	const selection = event => {
		const type1 = event.target.getAttribute("type1");
		const type2 = event.target.getAttribute("type2");
		const img = event.target.getAttribute("img");
		const resultType1 = types.get(type1);
		const resultType2 = types.get(type2);
		const challenger = challengerTeam[Math.round(Math.random() * (challengerTeam.length - 1))];
		setSelectedPokemon({resultType1, resultType2, img});
		setChallengerPokemon(challenger);
	};

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
						<button
							onClick={selection}
							type1={pokemon.type1}
							type2={pokemon.type2}
							img={pokemon.imgURL}
						>{`I Choose ${
							pokemon.nickname ? pokemon.nickname : pokemon.name
						}!`}</button>
					</div>,
				])}
			</header>
			<section>
				<Arena selectedPokemon={selectedPokemon} challengerPokemon={challengerPokemon} />
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
