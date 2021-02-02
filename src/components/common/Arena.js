import React from "react";
import PropTypes from "prop-types";
import { StyledArena } from "../../styles/common";

const Arena = props => {
	const { selectedPokemon, challengerPokemon, outcome, playerScore, challengerScore } = props;
	return (
		<StyledArena>
			<h3>{outcome}</h3>
			{selectedPokemon ? (
				<div>
					{selectedPokemon.img ? (
						<img src={selectedPokemon.img} alt={selectedPokemon.name} />
					) : null}
					<h3>
						{playerScore} : {challengerScore}
					</h3>
					{selectedPokemon.img ? (
						<img src={challengerPokemon.img} alt={challengerPokemon.name} />
					) : null}
				</div>
			) : null}
		</StyledArena>
	);
};

Arena.propTypes = {
	selectedPokemon: PropTypes.object,
	challengerPokemon: PropTypes.object,
	outcome: PropTypes.string,
	playerScore: PropTypes.number,
	challengerScore: PropTypes.number,
};

export default Arena;
