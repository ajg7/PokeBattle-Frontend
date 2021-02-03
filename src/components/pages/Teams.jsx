import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { teams, teamMembers } from "../../store/actions/";
import { logout } from "../../api/auth";
import { DialogBox, Button } from "../common";
import { StyledTeams } from "../../styles/pages";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";
import editButton from "../../assets/editIcon.png";

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
		<StyledTeams>
			<div>{active ? <DialogBox modalHandler={modalHandler} /> : null}</div>
			<div className={"teams-page"}>
				<header>
					<h2>Your Teams</h2>
				</header>
				<section>
					<div className={"team"}>
						{teams.map(ele => {
							return (
								<>
									<div className={"team-buttons"}>
										<img
											src={deleteButton}
											alt={"delete button"}
											onClick={deleteTeamHandler}
											id={ele[1][0].team_Id}
										/>
										<h3>{ele[0]}</h3>
										<img
											src={editButton}
											alt={"add pokemon to team"}
											onClick={pokedexHandler}
											id={ele[1][0].team_Id}
											className={"edit-team-members-button"}
										/>
									</div>
									<div className="records">
										<Button
											handleClick={recordsHandler}
											id={ele[1][0].team_Id}
											buttonText={"Records Room"}
											classType={"records-button"}
										/>
									</div>
									<div className={"teams"}>
										{ele[1].map((team, index) => {
											return team.imgURL ? (
												<div key={index} className={"team-member"}>
													<img src={team.imgURL} alt={team.name} />
												</div>
											) : null;
										})}
									</div>
								</>
							);
						})}
						<img
							src={addButton}
							alt="add team"
							onClick={modalHandler}
							className={"add-button"}
						/>
					</div>
				</section>
				<footer>
					<Button
						handleClick={whosThatPokemonHandler}
						buttonText={"Who's that Pokemon?"}
					/>
					<Button handleClick={logoutHandler} buttonText={"Log Out"} />
				</footer>
			</div>
		</StyledTeams>
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
