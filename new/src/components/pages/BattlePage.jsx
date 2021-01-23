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
	const [outcome, setOutcome] = useState("");
	let [playerScore, setPlayerScore] = useState(0);
	let [challengerScore, setChallengerScore] = useState(0);

	const battle = async event => {
		const type1 = event.target.getAttribute("type1");
		const type2 = event.target.getAttribute("type2");
		const img = event.target.getAttribute("img");
		const name = event.target.getAttribute("name");

		const playerType1 = types.get(type1) === undefined ? [] : types.get(type1);
		const playerType2 = types.get(type2) === undefined ? [] : types.get(type2);

		const challenger = challengerTeam[Math.round(Math.random() * (challengerTeam.length - 1))];
		const challengerType1 = types.get(challenger.type1) === undefined ? [] : types.get(challenger.type1);
		const challengerType2 = types.get(challenger.type2) === undefined ? [] : types.get(challenger.type2);

		setSelectedPokemon({ playerType1, playerType2, img, name });
		setChallengerPokemon({ name: challenger.name, img: challenger.imgURL });

		const eval1 = playerType1.filter(
			type => type === challenger.type1 || type === challenger.type2
		);
		const eval2 = playerType2.filter(
			type => type === challenger.type1 || type === challenger.type2
		);
		const eval3 = challengerType1.filter(type => type === type1 || type === type2);
		const eval4 = challengerType2.filter(type => type === type1 || type === type2);

		if (eval1.length > 0 || eval2.length > 0) {
			setOutcome("Player Wins!");
			setPlayerScore((playerScore = playerScore + 1));
		} else if (eval3.length > 0 || eval4.length > 0) {
			setOutcome("Challenger Wins!");
			setChallengerScore((challengerScore = challengerScore + 1));
		} else {
			let coinFlip = null;
			coinFlip = Math.round(Math.random());
			if (coinFlip === 1) {
				setOutcome("Player Wins!");
				setPlayerScore((playerScore = playerScore + 1));
			} else {
				setOutcome("Challenger Wins!");
				setChallengerScore((challengerScore = challengerScore + 1));
			}
		}

		if (outcome === "Player Wins!") {
			const result = challengerTeam.filter(pokemon => pokemon.name === challengerPokemon.name);
			const index = challengerTeam.indexOf(result);
			if (index > -1) {
				challengerTeam.splice(index, 1);
			}
		} else {
			const result = currentTeam.filter(pokemon => pokemon.name === name);
			const index = currentTeam.indexOf(result[0]);
			if (index > -1) {
				currentTeam.splice(index, 1);
			}
		}
	};

	const battleReset = () => {
		makeChallengerTeam();
		setPlayerScore(0);
		setChallengerScore(0);
		fetchCurrentTeam(params.teamId);
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
							onClick={battle}
							type1={pokemon.type1}
							type2={pokemon.type2}
							img={pokemon.imgURL}
							name={pokemon.name}
						>{`I Choose You, ${
							pokemon.nickname ? pokemon.nickname : pokemon.name
						}!`}</button>
					</div>,
				])}
			</header>
			<section>
				<Arena
					selectedPokemon={selectedPokemon}
					challengerPokemon={challengerPokemon}
					outcome={outcome}
					challengerScore={challengerScore}
					playerScore={playerScore}
				/>
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
				<button onClick={battleReset} disabled={false}>
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
