import React from "react";
import PropTypes from "prop-types";

const Arena = props => {
	const { selectedPokemon, challengerPokemon, outcome } = props;
	return (
		<div>
			<h3>{outcome}</h3>
			{selectedPokemon ? (
				<div>
					<img src={selectedPokemon.img} alt={selectedPokemon.name} />
					<h3>Player Score : Challenger Score</h3>
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
};

export default Arena;
