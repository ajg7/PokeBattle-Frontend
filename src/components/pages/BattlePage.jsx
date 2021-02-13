import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { uniqueNamesGenerator, countries, animals } from "unique-names-generator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { battle, pokemon, teams } from "../../store/actions";
import types from "../../utils/types";
import { Arena, Button } from "../common";
import { StyledBattlePage } from "../../styles/pages";
import { Battles } from "../../class/";

const BattlePage = props => {
	const params = useParams();
	const history = useHistory();
	const {
		currentTeam,
		fetchCurrentTeam,
		challengerTeam,
		makeChallengerTeam,
		teamName,
		makeABattle,
		updateScores,
		challengerTeamName,
	} = props;
	let { playerScore, challengerScore } = props;
	const [selectedPokemon, setSelectedPokemon] = useState({});
	const [challengerPokemon, setChallengerPokemon] = useState({});
	const [outcome, setOutcome] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [active, setActive] = useState(true);
	const [backgroundColor, setBackgroundColor] = useState("#028a0f");

	const teamsHandler = () => {
		setSelectedPokemon({});
		setChallengerPokemon({});
		setOutcome("");
		updateScores({ playerScore: 0, challengerScore: 0 });
		history.push("/teams");
	};

	const battle = async event => {
		const userId = localStorage.getItem("userId");
		const type1 = event.target.getAttribute("type1");
		const type2 = event.target.getAttribute("type2");
		const img = event.target.getAttribute("img");
		const name = event.target.getAttribute("name");
		let playerIndex;
		let challengerIndex;

		const playerType1 = types.get(type1) === undefined ? [] : types.get(type1);
		const playerType2 = types.get(type2) === undefined ? [] : types.get(type2);
		const player = new Battles(userId, type1, type2, playerType1, playerType2, img, name);

		const challengerPokemon =
			challengerTeam[Math.round(Math.random() * (challengerTeam.length - 1))];
		const challengerType1 =
			types.get(challengerPokemon.type1) === undefined
				? []
				: types.get(challengerPokemon.type1);
		const challengerType2 =
			types.get(challengerPokemon.type2) === undefined
				? []
				: types.get(challengerPokemon.type2);
		const challenger = new Battles(
			userId,
			challengerPokemon.type1,
			challengerPokemon.type2,
			challengerType1,
			challengerType2,
			challengerPokemon.imgurl,
			challengerPokemon.name
		);

		// Getting the index of each Pokemon
		currentTeam.forEach((pokemon, index) => {
			if (pokemon.name === name) playerIndex = index;
		});

		challengerTeam.forEach((pokemon, index) => {
			if (pokemon.name === challengerPokemon.name) challengerIndex = index;
		});

		setSelectedPokemon({ img, name });
		setChallengerPokemon({ img: challengerPokemon.imgurl, name: challengerPokemon.name });

		const { playerSubPoints, challengerSubPoints } = Battles.evaluator(player, challenger);

		if (playerSubPoints > challengerSubPoints) {
			setOutcome(`${name} wins!`);
			updateScores({ playerScore: playerScore + 1, challengerScore: challengerScore });
			challengerTeam.splice(challengerIndex, 1);
		}

		if (playerSubPoints < challengerSubPoints) {
			setOutcome(`${challengerPokemon.name} wins!`);
			updateScores({ playerScore: playerScore, challengerScore: challengerScore + 1 });
			currentTeam.splice(playerIndex, 1);
		}

		if (playerSubPoints === challengerSubPoints) {
			const coinFlip = Math.round(Math.random());
			if (coinFlip === 1) {
				setOutcome(`${name} wins by Coin Flip!`);
				updateScores({ playerScore: playerScore + 1, challengerScore: challengerScore });
				challengerTeam.splice(challengerIndex, 1);
			}
			if (coinFlip === 0) {
				setOutcome(`${challengerPokemon.name} wins by Coin Flip!`);
				updateScores({ playerScore: playerScore, challengerScore: challengerScore + 1 });
				currentTeam.splice(playerIndex, 1);
			}
		}

		// After the Game
		if (challengerTeam < 1) {
			await makeABattle(userId, params.teamId, playerScore, challengerScore);
			setDisabled(true);
			setActive(false);
			if (playerScore > challengerScore) setOutcome("Player Has Won Battle!");
			if (challengerScore > playerScore) setOutcome("Challenger Has Won Battle!");
		} else if (currentTeam < 1) {
			await makeABattle(userId, params.teamId, playerScore, challengerScore);
			setActive(false);
			if (playerScore > challengerScore) setOutcome("Player Has Won Battle!");
			if (challengerScore > playerScore) setOutcome("Challenger Has Won Battle!");
		}
	};

	const battleReset = async () => {
		const challengerTeamName = uniqueNamesGenerator({
			dictionaries: [countries, animals],
			style: "capital",
			separator: " ",
		});
		await makeChallengerTeam(challengerTeamName);
		await fetchCurrentTeam(params.teamId);
		setDisabled(false);
		setActive(true);
		setSelectedPokemon({});
		setChallengerPokemon({});
		setOutcome("");
		updateScores({ playerScore: 0, challengerScore: 0 });
	};

	const colorCollector = event => {
		setBackgroundColor(event.target.value);
	};

	useEffect(() => {
		fetchCurrentTeam(params.teamId);
	}, [fetchCurrentTeam, params.teamId]);

	return (
		<StyledBattlePage>
			<header>
				<h3>{teamName}</h3>
				<h3>
					{playerScore} : {challengerScore}
				</h3>
				<h3>{challengerTeamName}</h3>
			</header>
			<section className="main-content">
				<div className={"player-team"}>
					{currentTeam.map(pokemon => {
						return (
							<div key={pokemon.pokemon_id}>
								<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
								<img src={pokemon.imgurl} alt={pokemon.name} />
								<div className="selection-button">
									<Button
										handleClick={battle}
										type1={pokemon.type1}
										type2={pokemon.type2}
										img={pokemon.imgurl}
										name={pokemon.name}
										disabled={disabled}
										buttonText={`${
											pokemon.nickname ? pokemon.nickname : pokemon.name
										}, I Choose You!`}
									/>
								</div>
							</div>
						);
					})}
				</div>
				<div className="arena">
					<Arena
						selectedPokemon={selectedPokemon}
						challengerPokemon={challengerPokemon}
						outcome={outcome}
						playerScore={playerScore}
						challengerScore={challengerScore}
						backgroundColor={backgroundColor}
					/>
				</div>
				<div className="challenger-team">
					{challengerTeam.map(pokemon => {
						return (
							<div key={pokemon.pokemon_id}>
								<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
								<img src={pokemon.imgurl} alt={pokemon.name} />
							</div>
						);
					})}
				</div>
			</section>
			<footer>
				<Button handleClick={battleReset} disabled={active} buttonText={"Battle Again?"} />
				<select onChange={colorCollector}>
					<option value="#028a0f">-- Background Color --</option>
					<option value="#40826D">Viridian</option>
					<option value="#E9EAEC">Pewter</option>
					<option value="#0040FF">Cerulean</option>
					<option value="#e34234">Vermilion</option>
					<option value="#967bb6">Lavender</option>
					<option value="#ACE1AF">Celadon</option>
					<option value="#ca2c92">Fuchsia</option>
					<option value="#f4c430">Saffron</option>
					<option value="#E34234">Cinnabar</option>
				</select>
				<Button handleClick={teamsHandler} buttonText={"Your Teams"} />
			</footer>
		</StyledBattlePage>
	);
};

BattlePage.propTypes = {
	currentTeam: PropTypes.array,
	challengerTeam: PropTypes.array,
	fetchCurrentTeam: PropTypes.func,
	makeChallengerTeam: PropTypes.func,
	teamName: PropTypes.string,
	makeABattle: PropTypes.func,
	updateScores: PropTypes.func,
	playerScore: PropTypes.number,
	challengerScore: PropTypes.number,
	challengerTeamName: PropTypes.string,
};

export default connect(
	state => ({
		currentTeam: state.teams.currentTeam,
		challengerTeam: state.pokemon.challengerTeam,
		teamName: state.teams.teamName,
		playerScore: state.battle.playerScore,
		challengerScore: state.battle.challengerScore,
		challengerTeamName: state.pokemon.challengerTeamName,
	}),
	{
		fetchCurrentTeam: teams.fetchCurrentTeam,
		makeChallengerTeam: pokemon.makeChallengerTeam,
		makeABattle: battle.makeABattle,
		updateScores: battle.updateScores,
	}
)(BattlePage);
