import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import addButton from "../../assets/addButton.png";

const Teams = props => {
	const { teamData, fetchTeams, makeNewTeam } = props;

	const newTeamHandler = () => {
		const userId = localStorage.getItem("userId");
		makeNewTeam(userId, "Grand Island Dryads");
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchTeams(userId);
	}, [fetchTeams]);

	return (
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
				{teamData.map((team, i) => {
					return (
						<div key={i} id={team.id}>
							<h3>{team.team_name}</h3>
						</div>
					);
				})}
				<img src={addButton} alt="add team" height={20} width={20} onClick={newTeamHandler} />
			</section>
			<footer></footer>
		</div>
	);
};

Teams.propTypes = {
	fetchTeams: PropTypes.func,
	makeNewTeam: PropTypes.func,
	teamData: PropTypes.array,
};


export default connect(
	state => ({
		teamData: state.teams.teamData,
	}),
	{
		fetchTeams: teams.fetchTeams,
		makeNewTeam: teams.makeNewTeam
	}
)(Teams);