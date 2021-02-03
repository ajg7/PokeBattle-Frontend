import React from "react";
import PropTypes from "prop-types";
import { StyledArena } from "../../styles/common";

const Arena = props => {
	const { selectedPokemon, challengerPokemon, outcome, backgroundColor } = props;
	return (
		<StyledArena backgroundColor={backgroundColor}>
			{selectedPokemon ? (
				<div className="battle">
					<div className="pokemon">
						{selectedPokemon.img ? (
							<img src={selectedPokemon.img} alt={selectedPokemon.name} />
						) : null}
					</div>
					<h3>{outcome}</h3>
					<div className="pokemon">
						{selectedPokemon.img ? (
							<img src={challengerPokemon.img} alt={challengerPokemon.name} />
						) : null}
					</div>
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
	backgroundColor: PropTypes.string,
};

export default Arena;
