import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon, teams } from "../../store/actions";
import { Pokemon } from "../common";
import { StyledCards } from "../../styles/common";
import { logout } from "../../api/auth";

const Pokedex = props => {
	const { fetchPokemon, pokemon, fetchTeamById, teamNames } = props;
	const params = useParams();

	useEffect(() => {
		fetchPokemon();
		fetchTeamById(params.teamId);
	}, [fetchPokemon, fetchTeamById]);

	return (
		<div>
			<header>
				<h2>Pokedex</h2>
				<form>
					<input placeholder={"Search Pokemon"} />
				</form>
				<select>
					<option>--Select Type--</option>
					<option>The types will be mapped over to make this list</option>
				</select>
				<select>
					<option>--Alphabet--</option>
					<option>A - Z</option>
					<option>Z - A</option>
				</select>
			</header>
			<section>
				<div>
					<h3>{teamNames}</h3>
				</div>
				<StyledCards>
					{pokemon.map(member => {
						return (
							<Pokemon
								key={member.number}
								id={member.id}
								name={member.name}
								type1={member.type1}
								type2={member.type2}
								imgURL={member.imgURL}
								height={member.height}
								weight={member.weight}
								entry={member.entry}
								habitat={member.habitat}
								legendary={member.legendary}
								ancient={member.ancient}
								mythical={member.mythical}
							/>
						);
					})}
				</StyledCards>
			</section>
			<footer>
				<nav>
					<h3>Home</h3>
					<h3 onClick={logout}>Logout</h3>
				</nav>
			</footer>
		</div>
	);
};

Pokedex.propTypes = {
	pokemon: PropTypes.array,
	fetchPokemon: PropTypes.func,
	fetchTeamById: PropTypes.func,
	teamNames: PropTypes.array
};

export default connect(
	state => ({
		pokemon: state.pokemon.pokemon,
		teamNames: state.teams.teamNames
	}),
	{
		fetchPokemon: pokemon.fetchPokemon,
		fetchTeamById: teams.fetchTeamById
	}
)(Pokedex);
