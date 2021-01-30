import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { teams, teamMembers } from "../../store/actions/";
import { logout } from "../../api/auth";
import { DialogBox, Button } from "../common";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";
import editButton from "../../assets/editIcon.png";
import uuid from "react-uuid";

const Teams = props => {
	const { teams, fetchPokemonTeams, deleteTeam, fetchTeamById, getPokemonByTeam } = props;
	const [active, setActive] = useState(false);
	const history = useHistory();

	const modalHandler = () => {
		setActive(!active);
	};

	const pokedexHandler = event => {
		const teamId = event.target.id;
		history.push(`/pokedex/${teamId}`);
	};

	const deleteTeamHandler = event => {
		const teamId = event.target.id;
		deleteTeam(teamId);
	};

	const recordsHandler = async event => {
		const teamId = event.target.id;
		await getPokemonByTeam(teamId);
		await fetchTeamById(teamId);
		history.push(`/records/${teamId}`);
	};

	const whosThatPokemonHandler = () => history.push("/whos_that_pokemon");

	const logoutHandler = () => {
		logout();
		history.push("/");
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchPokemonTeams(userId);
	}, [fetchPokemonTeams]);

	return (
		<div>
			<div>{active ? <DialogBox modalHandler={modalHandler} /> : null}</div>
			<div>
				<header>
					<h1>PokeBattle</h1>
				</header>
				<section>
					<h2>Your Teams</h2>
					{teams.map(ele => {
						return (
							<>
								<div>
									<h3>{ele[0]}</h3>
									<img
										src={deleteButton}
										alt={"delete button"}
										height={20}
										width={20}
										onClick={deleteTeamHandler}
										id={ele[1][0].team_Id}
									/>
									<img
										src={editButton}
										alt={"add pokemon to team"}
										height={20}
										width={20}
										onClick={pokedexHandler}
										id={ele[1][0].team_Id}
									/>
									<button onClick={recordsHandler} id={ele[1][0].team_Id}>
										Records Room
									</button>
								</div>
								{ele[1].map(team => {
									return (
										<div key={uuid()}>
											<img src={team.imgURL} alt={team.name} />
										</div>
									);
								})}
							</>
						);
					})}
					<img
						src={addButton}
						alt="add team"
						height={20}
						width={20}
						onClick={modalHandler}
					/>
				</section>
				<footer>
					<Button
						handleClick={whosThatPokemonHandler}
						buttonText={"Who's that Pokemon?"}
					/>
					<Button handleClick={logoutHandler} buttonText={"Log Out"} />
				</footer>
			</div>
		</div>
	);
};

Teams.propTypes = {
	fetchPokemonTeams: PropTypes.func,
	makeNewTeam: PropTypes.func,
	teams: PropTypes.array,
	deleteTeam: PropTypes.func,
	teamId: PropTypes.number,
	fetchTeamById: PropTypes.func,
	getPokemonByTeam: PropTypes.func,
};

export default connect(
	state => ({
		teams: state.teams.teams,
		teamId: state.teams.teamId,
	}),
	{
		makeNewTeam: teams.makeNewTeam,
		fetchPokemonTeams: teams.fetchPokemonTeams,
		deleteTeam: teams.deleteTeam,
		fetchTeamById: teams.fetchTeamById,
		getPokemonByTeam: teamMembers.getPokemonByTeam,
	}
)(Teams);
