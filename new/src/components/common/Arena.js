import React from "react";
import PropTypes from "prop-types";

const Arena = props => {
	const { selectedPokemon, challengerPokemon, outcome, challengerScore, playerScore } = props;
	return (
		<div>
			<h3>{outcome}</h3>
			<h3>Player : Challenger</h3>
			<h3>
				{playerScore} : {challengerScore}
			</h3>
			{selectedPokemon ? (
				<div>
					<img src={selectedPokemon.img} alt={selectedPokemon.name} />
					<img src={challengerPokemon.img} alt={challengerPokemon.name} />
				</div>
			) : null}
		</div>
	);
};

Arena.propTypes = {
	selectedPokemon: PropTypes.object,
	challengerPokemon: PropTypes.object,
	outcome: PropTypes.string,
	challengerScore: PropTypes.number,
	playerScore: PropTypes.number,
};

export default Arena;
