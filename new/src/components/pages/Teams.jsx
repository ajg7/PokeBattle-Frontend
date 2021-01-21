import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import { DialogBox } from "../common";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";

const Teams = props => {
	const { teams, newTeamId, fetchPokemonTeams, deleteTeam } = props;
	const [active, setActive] = useState(false);

	// const newTeamHandler = () => {
	// const userId = localStorage.getItem("userId");
	// const newTeam = { userId, teamName };
	// makeNewTeam(userId, "Hunters");
	// };

	const modalHandler = () => setActive(!active);

	const deleteTeamHandler = event => {
		const teamId = event.target.id;
		deleteTeam(newTeamId || teamId);
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
					<nav>
						<img src={""} alt="help" />
						<button onClick={logout}>Log Out</button>
					</nav>
				</header>
				<section>
					<h2>Teams</h2>
					{teams.map(ele => {
						const [team] = ele[1];
						return (
							<div key={newTeamId || team.team_Id}>
								<h3>{ele[0]}</h3>
								<img
									src={deleteButton}
									alt={"delete button"}
									height={20}
									width={20}
									onClick={deleteTeamHandler}
									id={newTeamId || team.team_Id}
								/>
								{ele[1].map((team, index) => {
									return (
										<div key={index}>
											<img
												src={team.imgURL}
												alt={team.name}
												id={team.pokemon_Id}
											/>
										</div>
									);
								})}
							</div>
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
	newTeamId: PropTypes.number,
};

export default connect(
	state => ({
		teams: state.teams.teams,
		newTeamId: state.teams.newTeamId,
	}),
	{
		makeNewTeam: teams.makeNewTeam,
		fetchPokemonTeams: teams.fetchPokemonTeams,
		deleteTeam: teams.deleteTeam,
	}
)(Teams);
