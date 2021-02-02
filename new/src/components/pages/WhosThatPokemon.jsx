import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { pokemon, whosThatPokemon } from "../../store/actions";
import { StyledWhosThatPokemon } from "../../styles/pages/StyledWhosThatPokemon";
import { Button } from "../common";
import { connect } from "react-redux";

const WhosThatPokemon = props => {
	const {
		fetchFeaturedPokemon,
		featuredPokemon,
		getTotalPoints,
		totalPoints,
		updateTotalPoints,
	} = props;
	const [revealed, setRevealed] = useState(false);
	const [outcome, setOutcome] = useState("");
	const [points, setPoints] = useState(0);
	const [randomNumber, setRandomNumber] = useState(Math.round(Math.random() * 25));
	const nameRef = useRef();
	const userId = localStorage.getItem("userId");
	const history = useHistory();

	useEffect(() => {
		fetchFeaturedPokemon();
		getTotalPoints(userId);
	}, [fetchFeaturedPokemon, getTotalPoints, userId]);

	const evaluator = event => {
		event.preventDefault();
		let submission = nameRef.current.value.toLowerCase();
		if (submission === "nidoran girl") submission = "nidoran ♀";
		if (submission === "nidoran boy") submission = "nidoran ♂";
		if (submission === featuredPokemon.name) {
			setOutcome("You Win!");
			randomNumber < 23 ? setPoints(points + 1) : setPoints(points + 5);
		} else {
			setOutcome("You Lose!");
			randomNumber < 23 ? setPoints(points - 1) : setPoints(points - 5);
		}
		setRevealed(true);
	};

	const reset = async () => {
		setRevealed(false);
		setOutcome("");
		setRandomNumber(Math.round(Math.random() * 25));
		nameRef.current.value = "";
		await fetchFeaturedPokemon();
	};

	const teamsHandler = async () => {
		const updatedPoints = { points: totalPoints + points };
		try {
			if (updateTotalPoints.points !== totalPoints) updateTotalPoints(updatedPoints, userId);
		} finally {
			history.goBack();
		}
	};

	return (
		<StyledWhosThatPokemon revealed={revealed}>
			<header>
				<h3>{"Who's That Pokemon?"}</h3>
				<h3>{points}</h3>
			</header>
			<section>
				<img
					src={
						randomNumber < 23
							? featuredPokemon.modern_imgURL
							: featuredPokemon.shiny_imgURL
					}
					alt={"who's that pokemon?"}
					className={"featured-pokemon-img"}
				/>
				<p>{featuredPokemon.entry}</p>
				<h3>{outcome}</h3>
				<form onSubmit={evaluator}>
					<label>
						<input placeholder="Enter Name of Pokemon" type="text" ref={nameRef} />
					</label>
					<Button
						disabled={!revealed ? false : true}
						classType={"whos-that-pokemon-submit-button"}
						buttonText={"Submit"}
					/>
				</form>
			</section>
			<footer>
				<Button
					handleClick={reset}
					disabled={!revealed ? true : false}
					classType={"reset-button"}
					buttonText={"Again?"}
				/>
				<Button handleClick={teamsHandler} buttonText={"Your Teams"} />
			</footer>
		</StyledWhosThatPokemon>
	);
};

WhosThatPokemon.propTypes = {
	featuredPokemon: PropTypes.object,
	fetchFeaturedPokemon: PropTypes.func,
	getTotalPoints: PropTypes.func,
	totalPoints: PropTypes.number,
	updateTotalPoints: PropTypes.func,
};

export default connect(
	state => ({
		featuredPokemon: state.pokemon.featuredPokemon,
		totalPoints: state.whosThatPokemon.totalPoints,
	}),
	{
		fetchFeaturedPokemon: pokemon.fetchFeaturedPokemon,
		getTotalPoints: whosThatPokemon.getTotalPoints,
		updateTotalPoints: whosThatPokemon.updateTotalPoints,
	}
)(WhosThatPokemon);
