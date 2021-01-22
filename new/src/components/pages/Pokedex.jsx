import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon, teamMembers, teams } from "../../store/actions";
import { Pokemon } from "../common";
import { StyledCards } from "../../styles/common";
import { logout } from "../../api/auth";
import deleteButton from "../../assets/deleteButton.png";

const Pokedex = props => {
	const {
		fetchPokemon,
		pokemon,
		fetchTeamById,
		teamName,
		fetchPokemonTeams,
		teams,
		deletePokemonFromTeam,
		setCurrentTeam
	} = props;
	const params = useParams();
	const currentTeam = teams.filter(team => team[0] === teamName);
	setCurrentTeam(currentTeam.map(pokemon => pokemon[1]));

	const deletePokemonHandler = async event => {
		const userId = localStorage.getItem("userId");
		await deletePokemonFromTeam(event.target.id, params.teamId);
		await fetchPokemonTeams(userId);
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchPokemon();
		fetchTeamById(params.teamId);
		fetchPokemonTeams(userId);
	}, [fetchPokemon, fetchTeamById, fetchPokemonTeams]);

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
				<h3>{teamName}</h3>
				{currentTeam.map(ele => {
					{
						return ele[1].map((pokemon, index) => {
							return (
								<div key={index}>
									<img
										src={pokemon.imgURL}
										alt={pokemon.name}
										id={pokemon.pokemon_Id}
									/>
									<img
										src={deleteButton}
										alt={"remove pokemon from team"}
										id={pokemon.pokemon_Id}
										height={20}
										width={20}
										onClick={deletePokemonHandler}
									/>
								</div>
							);
						});
					}
				})}
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
								teamId={+params.teamId}
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
	teamName: PropTypes.string,
	fetchPokemonTeams: PropTypes.func,
	teams: PropTypes.array,
	deletePokemonFromTeam: PropTypes.func,
	setCurrentTeam: PropTypes.func
};

export default connect(
	state => ({
		pokemon: state.pokemon.pokemon,
		teamName: state.teams.teamName,
		teams: state.teams.teams,
	}),
	{
		fetchPokemon: pokemon.fetchPokemon,
		fetchTeamById: teams.fetchTeamById,
		fetchPokemonTeams: teams.fetchPokemonTeams,
		deletePokemonFromTeam: teamMembers.deletePokemonFromTeam,
		setCurrentTeam: teams.setCurrentTeam
	}
)(Pokedex);
