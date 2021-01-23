import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon, teamMembers, teams } from "../../store/actions";
import { Pokemon } from "../common";
import { StyledCards } from "../../styles/common";
import { logout } from "../../api/auth";
import deleteButton from "../../assets/deleteButton.png";
import editButton from "../../assets/editIcon.png";

const Pokedex = props => {
	const {
		fetchPokemon,
		pokemon,
		fetchTeamById,
		teamName,
		fetchPokemonTeams,
		teams,
		deletePokemonFromTeam,
		setCurrentTeam,
		findPokemon,
		searchByType,
		alphabetizePokemon,
		makeNickname,
	} = props;
	const params = useParams();
	const history = useHistory();
	const currentTeam = teams.filter(team => team[0] === teamName);
	const searchRef = useRef();
	const nicknameRef = useRef();
	const [active, setActive] = useState(false);
	const [selectedPokemonId, setSelectedPokemonId] = useState(0);
	setCurrentTeam(currentTeam.map(pokemon => pokemon[1]));

	const deletePokemonHandler = async event => {
		const userId = localStorage.getItem("userId");
		await deletePokemonFromTeam(event.target.id, params.teamId);
		await fetchPokemonTeams(userId);
	};

	const submitHandler = async event => {
		event.preventDefault();
		const search = searchRef.current.value;
		const searchLowerCase = search.toLowerCase();
		try {
			await findPokemon(searchLowerCase);
		} finally {
			searchRef.current.value = "";
		}
	};

	const reset = () => fetchPokemon();
	const typeDropDownHandler = async event => {
		const type = event.target.value;
		await searchByType(type);
		event.target.value = "types";
	};

	const alphabetOrderingHandler = async event => {
		const ordering = event.target.value;
		await alphabetizePokemon(ordering);
		event.target.value = "alphabet-selector";
	};

	const nicknameHandler = event => {
		setActive(true);
		setSelectedPokemonId(event.target.id);
	};

	const closeNicknameInput = () => setActive(false);

	const submitNickname = async event => {
		event.preventDefault();
		const userId = localStorage.getItem("userId");
		const nickname = { nickname: nicknameRef.current.value, teamId: +params.teamId };
		await makeNickname(nickname, +selectedPokemonId);
		nicknameRef.current.value = "";
		setActive(!active);
		await fetchPokemonTeams(userId);
	};

	const battleHandler = () => history.push(`/battle/${params.teamId}`);

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
				<form onSubmit={submitHandler}>
					<input placeholder={"Search Pokemon"} ref={searchRef} />
					<button>Search</button>
				</form>
				<select onChange={typeDropDownHandler}>
					<option value="types">--Select Type--</option>
					<option value="grass">Grass</option>
					<option value="fire">Fire</option>
					<option value="water">Water</option>
					<option value="flying">Flying</option>
					<option value="ice">Ice</option>
					<option value="dragon">Dragon</option>
					<option value="poison">Poison</option>
					<option value="psychic">Psychic</option>
					<option value="normal">Normal</option>
					<option value="fighting">Fighting</option>
					<option value="steel">Steel</option>
					<option value="electric">Electric</option>
					<option value="ground">Ground</option>
					<option value="rock">Rock</option>
					<option value="fairy">Fairy</option>
				</select>
				<select onChange={alphabetOrderingHandler}>
					<option value="alphabet-selector">--Alphabet--</option>
					<option value="asc">A - Z</option>
					<option value="desc">Z - A</option>
				</select>
				<button onClick={reset}>Reset</button>
			</header>
			<section>
				<h3>{teamName}</h3>
				{active ? (
					<div>
						<form onSubmit={submitNickname}>
							<input placeholder="Enter Nickname" ref={nicknameRef} />
							<button>Submit</button>
						</form>
						<button onClick={closeNicknameInput}>Cancel</button>
					</div>
				) : null}
				{currentTeam.map(ele => {
					{
						return ele[1].map((pokemon, index) => {
							return (
								<div key={index}>
									<h3>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h3>
									{pokemon.pokemon_Id ? (
										<>
											<img
												src={editButton}
												alt="give pokemon a nickname"
												height={20}
												width={20}
												id={pokemon.pokemon_Id}
												onClick={nicknameHandler}
											/>
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
										</>
									) : null}
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
				<button onClick={battleHandler}>Battle!</button>
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
	setCurrentTeam: PropTypes.func,
	findPokemon: PropTypes.func,
	searchByType: PropTypes.func,
	alphabetizePokemon: PropTypes.func,
	makeNickname: PropTypes.func,
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
		setCurrentTeam: teams.setCurrentTeam,
		findPokemon: pokemon.findPokemon,
		searchByType: pokemon.searchByType,
		alphabetizePokemon: pokemon.alphabetizePokemon,
		makeNickname: teamMembers.makeNickname,
	}
)(Pokedex);
