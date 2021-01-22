import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { teams } from "../../store/actions/";
import { logout } from "../../api/auth";
import { DialogBox } from "../common";
import addButton from "../../assets/addButton.png";
import deleteButton from "../../assets/deleteButton.png";

const Teams = props => {
	const { teams, fetchPokemonTeams, deleteTeam } = props;
	const [active, setActive] = useState(false);

	const modalHandler = () => { 
		setActive(!active);
	};

	const deleteTeamHandler = event => {
		const teamId = event.target.id;
		deleteTeam(teamId);
		console.log(teamId);
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
					{teams.map((ele, index) => {
						console.log(ele[1]);
						return (
							<>
							<div key={index}>
								<h3>{ele[0]}</h3>
							<img
									src={deleteButton}
									alt={"delete button"}
									height={20}
									width={20}
									onClick={deleteTeamHandler}
									id={ele[1].length === 0 ? index : ele[1][0].team_Id}
							/>
							</div>
							{ele[1].map(team => {
								return (
									<div key={team.team_Id}>
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
