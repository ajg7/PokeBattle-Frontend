import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import addButton from "../../assets/addButton.png";

const Teams = props => {
	const { fetchTeams, teams, fetchPokemonTeamMembers, makeNewTeam } = props;

	const newTeamHandler = () => {
		const userId = localStorage.getItem("userId");
		makeNewTeam(userId, "Grand Island Dryads");
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchTeams(userId);
		fetchPokemonTeamMembers(userId);
	}, [fetchTeams, fetchPokemonTeamMembers]);

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
				{teams.map(ele => {
					const [team] = ele[1];
					return (
						<div key={team.team_Id}>
							<h3>{ele[0]}</h3>
							{ele[1].map((team, index) => {
								return (
									<div key={index}>
										<img src={team.imgURL} alt={team.name} />
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
					onClick={newTeamHandler}
				/>
			</section>
			<footer></footer>
		</div>
	);
};

Teams.propTypes = {
	fetchTeams: PropTypes.func,
	fetchPokemonTeamMembers: PropTypes.func,
	makeNewTeam: PropTypes.func,
	teams: PropTypes.object,
};

export default connect(
	state => ({
		teamData: state.teams.teamData,
		teams: state.teams.teams,
	}),
	{
		fetchTeams: teams.fetchTeams,
		makeNewTeam: teams.makeNewTeam,
		fetchPokemonTeamMembers: teams.fetchPokemonTeamMembers,
	}
)(Teams);
