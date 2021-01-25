import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import { DialogBox } from "../common";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";
import editButton from "../../assets/editIcon.png";
import uuid from "react-uuid";

const Teams = props => {
	const { teams, fetchPokemonTeams, deleteTeam } = props;
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

	const recordsHandler = event => {
		const teamId = event.target.id;
		history.push(`/records/${teamId}`);
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
					<button onClick={logout}>Log Out</button>
				</header>
				<section>
					<h2>Teams</h2>
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
				<footer></footer>
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
	}
)(Teams);
