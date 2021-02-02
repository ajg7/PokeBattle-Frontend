import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { battle, pokemon, teams } from "../../store/actions";
import types from "../../utils/types";
import { Arena, Button } from "../common";
import { StyledBattlePage } from "../../styles/pages";

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

	const teamsHandler = () => history.push("/teams");

	const battle = async event => {
		const userId = localStorage.getItem("userId");
		const type1 = event.target.getAttribute("type1");
		const type2 = event.target.getAttribute("type2");
		const img = event.target.getAttribute("img");
		const name = event.target.getAttribute("name");

		const playerType1 = types.get(type1) === undefined ? [] : types.get(type1);
		const playerType2 = types.get(type2) === undefined ? [] : types.get(type2);

		const challenger = challengerTeam[Math.round(Math.random() * (challengerTeam.length - 1))];
		const challengerType1 =
			types.get(challenger.type1) === undefined ? [] : types.get(challenger.type1);
		const challengerType2 =
			types.get(challenger.type2) === undefined ? [] : types.get(challenger.type2);

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

		const totalPlayerPoints = eval1.length + eval2.length;
		const totalChallengerPoints = eval3.length + eval4.length;

		if (totalChallengerPoints > totalPlayerPoints) {
			setOutcome("Challenger Wins!");
			challengerScore++;
			updateScores({ playerScore, challengerScore });
			const result = currentTeam.filter(pokemon => pokemon.name === name);
			const index = currentTeam.indexOf(result[0]);
			if (index > -1) currentTeam.splice(index, 1);
		}
		if (totalPlayerPoints > totalChallengerPoints) {
			setOutcome("Player Wins!");
			playerScore++;
			updateScores({ playerScore, challengerScore });
			const result = challengerTeam.filter(
				pokemon => pokemon.name === challengerPokemon.name
			);
			const index = challengerTeam.indexOf(result[0]);
			if (index > -1) challengerTeam.splice(index, 1);
		}
		if (totalPlayerPoints === totalChallengerPoints) {
			let coinFlip = Math.round(Math.random() * 25) % 2;
			if (coinFlip === 1) {
				setOutcome("Player Wins by Coin Flip!");
				playerScore++;
				updateScores({ playerScore, challengerScore });
				const result = challengerTeam.filter(
					pokemon => pokemon.name === challengerPokemon.name
				);
				const index = challengerTeam.indexOf(result[0]);
				if (index > -1) challengerTeam.splice(index, 1);
			} else {
				setOutcome("Challenger Wins by Coin Flip!");
				challengerScore++;
				updateScores({ playerScore, challengerScore });
				const result = currentTeam.filter(pokemon => pokemon.name === name);
				const index = currentTeam.indexOf(result[0]);
				if (index > -1) currentTeam.splice(index, 1);
			}
		}

		if (outcome === "Player Wins!" || outcome === "Player Wins by Coin Flip!") {
			const result = challengerTeam.filter(
				pokemon => pokemon.name === challengerPokemon.name
			);
			const index = challengerTeam.indexOf(result[0]);
			if (index > -1) challengerTeam.splice(index, 1);
		}
		if (outcome === "Challenger Wins!" || outcome === "Challenger Wins by Coin Flip!") {
			const result = currentTeam.filter(pokemon => pokemon.name === name);
			const index = currentTeam.indexOf(result[0]);
			if (index > -1) currentTeam.splice(index, 1);
		}

		if (challengerTeam < 1) {
			await makeABattle(userId, params.teamId, playerScore, challengerScore);
			setDisabled(true);
			setActive(false);
			makeABattle(userId, params.teamId);
			if (playerScore > challengerScore) setOutcome("Player Has Won Battle!");
			if (challengerScore > playerScore) setOutcome("Challenger Has Won Battle!");
			if (playerScore === challengerScore) setOutcome("Tie");
		} else if (currentTeam < 1) {
			await makeABattle(userId, params.teamId, playerScore, challengerScore);
			setActive(false);
			if (playerScore > challengerScore) setOutcome("Player Has Won Battle!");
			if (challengerScore > playerScore) setOutcome("Challenger Has Won Battle!");
			if (playerScore === challengerScore) setOutcome("Tie");
		}
	};

	const battleReset = async () => {
		await makeChallengerTeam();
		await fetchCurrentTeam(params.teamId);
		setDisabled(false);
		setActive(true);
		setSelectedPokemon({});
		setChallengerPokemon({});
		setOutcome("");
		updateScores({ playerScore: 0, challengerScore: 0 });
	};

	useEffect(() => {
		fetchCurrentTeam(params.teamId);
	}, [fetchCurrentTeam, params.teamId]);

	return (
		<StyledBattlePage>
			<header>
				<h3>{teamName}</h3>
				<div className={"player-team"}>
					{currentTeam.map(pokemon => [
						<div key={pokemon.pokemon_Id}>
							<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
							<img src={pokemon.imgURL} alt={pokemon.name} />
							<div>
								<Button
									handleClick={battle}
									type1={pokemon.type1}
									type2={pokemon.type2}
									img={pokemon.imgURL}
									name={pokemon.name}
									disabled={disabled}
									buttonText={`${
										pokemon.nickname ? pokemon.nickname : pokemon.name
									}, I Choose You!`}
								/>
							</div>
						</div>,
					])}
				</div>
			</header>
			<section>
				<Arena
					selectedPokemon={selectedPokemon}
					challengerPokemon={challengerPokemon}
					outcome={outcome}
					playerScore={playerScore}
					challengerScore={challengerScore}
				/>
			</section>
			<footer>
				<h3>{challengerTeamName}</h3>
				<div className="challenger-team">
					{challengerTeam.map(pokemon => {
						return (
							<div key={pokemon.pokemon_Id}>
								<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
								<img src={pokemon.imgURL} alt={pokemon.name} />
							</div>
						);
					})}
				</div>
				<Button handleClick={battleReset} disabled={active} buttonText={"Battle Again?"} />
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
