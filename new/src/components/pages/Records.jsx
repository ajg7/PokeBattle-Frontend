import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { teamMembers } from "../../store/actions";

const Records = props => {
	const { getPokemonByTeam, pokemonInTeam } = props;
	const params = useParams();
	useEffect(() => {
		getPokemonByTeam(params.teamId);
	}, [getPokemonByTeam]);
	return (
		<div>
			<header>
				<h2>Records Room</h2>
			</header>
            <section>
            <h3>Wins: </h3>
            <h3>Losses: </h3>
            <h3>Win/Loss Ratio: </h3>
            <h3>Average Score: </h3>
            <h3>Best Score: </h3>
            {pokemonInTeam.map(pokemon => {
                return (
                    <div key={pokemon.pokemon_Id}>
                    <img src={pokemon.imgURL} alt={pokemon.name} />
                    <h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
                    </div>
                );
            })}
            </section>
			<footer></footer>
		</div>
	);
};

Records.propTypes = {
	getPokemonByTeam: PropTypes.func,
	pokemonInTeam: PropTypes.array,
};

export default connect(
	state => ({
		pokemonInTeam: state.teamMembers.pokemonInTeam,
	}),
	{
		getPokemonByTeam: teamMembers.getPokemonByTeam,
	}
)(Records);
