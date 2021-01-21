import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";

const Teams = props => {
	const { teams, fetchPokemonTeams, deleteTeam, makeNewTeam } = props;

	const newTeamHandler = () => {
		const userId = localStorage.getItem("userId");
		makeNewTeam(userId, "Grand Island Dryads");
	};

	const deleteTeamHandler = event => {
		console.log(event.target.id);
		const teamId = event.target.id;
		deleteTeam(teamId);
	};

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		fetchPokemonTeams(userId);
	}, [fetchPokemonTeams]);

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
							<img
								src={deleteButton}
								alt={"delete button"}
								height={20}
								width={20}
								onClick={deleteTeamHandler}
								id={team.team_Id}
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
					onClick={newTeamHandler}
				/>
			</section>
			<footer></footer>
		</div>
	);
};

Teams.propTypes = {
	fetchPokemonTeams: PropTypes.func,
	makeNewTeam: PropTypes.func,
	teams: PropTypes.array,
	deleteTeam: PropTypes.func
};

export default connect(
	state => ({
		teams: state.teams.teams,
	}),
	{
		makeNewTeam: teams.makeNewTeam,
		fetchPokemonTeams: teams.fetchPokemonTeams,
		deleteTeam: teams.deleteTeam
	}
)(Teams);
