import React from "react";
import PropTypes from "prop-types";

const Arena = props => {
	const { selectedPokemon, challengerPokemon } = props;

	return (
		<div>
			<img src={selectedPokemon.img} alt={"Selected Pokemon"} />
			<img src={challengerPokemon.imgURL} alt={challengerPokemon.name} />
		</div>
	);
};

Arena.propTypes = {
	selectedPokemon: PropTypes.object,
	challengerPokemon: PropTypes.object,
};

export default Arena;
