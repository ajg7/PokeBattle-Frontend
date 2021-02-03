import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { uniqueNamesGenerator, countries, animals } from "unique-names-generator";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon, teamMembers, teams } from "../../store/actions";
import { Pokemon, Button } from "../common";
import { StyledCards } from "../../styles/common";
import { StyledPokedex } from "../../styles/pages";
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
		searchFilters,
		makeChallengerTeam,
		habitatFilter,
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
		setActive(false);
		await deletePokemonFromTeam(event.target.id, params.teamId);
		await fetchPokemonTeams(userId);
	};

	const submitHandler = async event => {
		event.preventDefault();
		const search = searchRef.current.value;
		const searchLowerCase = search.toLowerCase();
		const result = pokemon.filter(p => p.name.startsWith(searchLowerCase));
		await findPokemon(result);
		searchRef.current.value = "";
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

	const habitatFilterHandler = async event => {
		const habitat = event.target.value;
		event.target.value = "habitat-filter";
		await habitatFilter(habitat);
	};

	const otherFilters = async event => {
		const { value } = event.target;
		let parameter;
		if (value === "ancient" || value === "legendary" || value === "mythical")
			parameter = "status";
		else if (value === "lightest" || value === "heaviest") parameter = "weight";
		else if (value === "shortest" || value === "tallest") parameter = "height";
		searchFilters(parameter, value);
		event.target.value = "other-filters";
	};

	const battleHandler = async () => {
		const challengerTeamName = uniqueNamesGenerator({
			dictionaries: [countries, animals],
			style: "capital",
			separator: " ",
		});
		await makeChallengerTeam(challengerTeamName);
		history.push(`/battle/${params.teamId}`);
	};

	const teamsHandler = () => history.goBack();

	const logoutHandler = () => {
		logout();
		history.push("/");
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchTeamById(params.teamId);
		fetchPokemonTeams(userId);
		fetchPokemon();
	}, [fetchPokemon, fetchTeamById, fetchPokemonTeams, params.teamId]);

	return (
		<StyledPokedex currentTeam={currentTeam}>
			<header>
				<h2>Pokedex</h2>
				<div className="search">
					<form onSubmit={submitHandler}>
						<input placeholder={"Search Pokemon"} ref={searchRef} />
						<div className="search-buttons">
							<Button buttonText={"Search"} />
							<Button handleClick={reset} buttonText={"Reset"} />
						</div>
					</form>
				</div>
				<div className="filters">
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
					<select onChange={habitatFilterHandler}>
						<option value="habitat-filter">--Habitat Filter--</option>
						<option value="cave">Cave</option>
						<option value="forest">Forest</option>
						<option value="mountain">Mountain</option>
						<option value="rough-terrain">Rough-Terrain</option>
						<option value="sea">Sea</option>
						<option value="urban">Urban</option>
						<option value="waters-edge">Waters-Edge</option>
						<option value="unknown">Unknown</option>
					</select>
					<select onChange={otherFilters}>
						<option value="other-filters">--Other Filters--</option>
						<option value="heaviest">Heaviest - Lightest</option>
						<option value="lightest">Lightest - Heaviest</option>
						<option value="ancient">Ancient</option>
						<option value="legendary">Legendary</option>
						<option value="mythical">Mythical</option>
						<option value="tallest">Tallest - Shortest</option>
						<option value="shortest">Shortest - Tallest</option>
					</select>
				</div>
			</header>
			<section>
				<h3 className="team-name">{teamName}</h3>
				{active ? (
					<div className={"nickname-form"}>
						<form onSubmit={submitNickname}>
							<div>
								<input placeholder="Enter Nickname" ref={nicknameRef} />
							</div>
							<div className="form-buttons">
								<Button buttonText={"Ok"} />
								<Button handleClick={closeNicknameInput} buttonText={"Cancel"} />
							</div>
						</form>
					</div>
				) : null}
				<div className="team">
					{currentTeam.map(ele => {
						{
							return ele[1].map((pokemon, index) => {
								return (
									<div key={index}>
										<h3>
											{pokemon.nickname ? pokemon.nickname : pokemon.name}
										</h3>
										{pokemon.pokemon_Id ? (
											<div>
												<img
													src={editButton}
													alt="give pokemon a nickname"
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
													onClick={deletePokemonHandler}
												/>
											</div>
										) : null}
									</div>
								);
							});
						}
					})}
				</div>
				<StyledCards className="cards">
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
					<Button handleClick={battleHandler} buttonText={"Battle!"} />
					<Button handleClick={teamsHandler} buttonText={"Your Teams"} />
					<Button handleClick={logoutHandler} buttonText={"Logout"} />
				</nav>
			</footer>
		</StyledPokedex>
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
	searchFilters: PropTypes.func,
	makeChallengerTeam: PropTypes.func,
	habitatFilter: PropTypes.func,
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
		searchFilters: pokemon.searchFilters,
		makeChallengerTeam: pokemon.makeChallengerTeam,
		habitatFilter: pokemon.habitatFilter,
	}
)(Pokedex);
