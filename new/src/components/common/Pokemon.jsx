import React, { useState } from "react";
import { teamNumberSchema } from "../../utils/formSchemas";
import { connect } from "react-redux";
import { teams, teamMembers } from "../../store/actions";
import { TypePills, CardFlipAnim } from "../../styles/common";
import PropTypes from "prop-types";

const Pokemon = props => {
	const {
		id,
		name,
		type1,
		type2,
		imgURL,
		height,
		weight,
		entry,
		habitat,
		legendary,
		mythical,
		ancient,
		addPokemonToTeam,
		fetchPokemonTeams,
		teamId,
		currentTeam,
	} = props;
	const [flipped, setFlipped] = useState(false);
	const [buttonActive, setButtonActive] = useState(false);
	const [teamNumberErrors, setTeamNumberErrors] = useState("");

	const flipHandler = () => (!flipped && !buttonActive ? setFlipped(true) : setFlipped(false));
	const mouseLeaveHandler = () => (flipped ? setFlipped(false) : null);
	const overButton = () => setButtonActive(true);
	const leaveButton = () => setButtonActive(false);
	const addPokemonHandler = async event => {
		const userId = localStorage.getItem("userId");
		const pokeId = +event.target.id;
		let duplicate = false;
		for (const ele of currentTeam) {
			for (const member of ele) {
				if (member.pokemon_Id === pokeId) duplicate = true;
			}
		}
		const valid = await teamNumberSchema.isValid({ currentTeam: currentTeam[0] });
		teamNumberSchema
			.validate({ currentTeam: currentTeam[0] })
			.catch(error => setTeamNumberErrors(error.errors));
		if (valid && !duplicate) {
			await addPokemonToTeam(pokeId, teamId);
			await fetchPokemonTeams(userId);
		} else {
			setTeamNumberErrors("Cannot have Duplicate Pokemon");
		}
	};

	return (
		<>
			<CardFlipAnim onClick={flipHandler}>
				<h3>{teamNumberErrors}</h3>
				<div className={flipped ? "card flipped" : "card"} onMouseLeave={mouseLeaveHandler}>
					<div className="card-inner">
						<section className="card-front">
							<div className="image-container">
								<img src={imgURL} alt={name} value={id} />
							</div>
							<div className="pokemon-data-container">
								<h3 className="id">#{id}</h3>
								<h3>{name}</h3>
								<TypePills type={type1} secondaryType={type2}>
									<div className="type-pill-primary">
										<h3 className={type1} id="primary-type-title">
											{type1}
										</h3>
									</div>
									<div className="type-pill-secondary">
										<h3 className={type2} id="primary-type-title">
											{type2}
										</h3>
									</div>
								</TypePills>
								<button
									onClick={addPokemonHandler}
									id={id}
									name={name}
									onMouseEnter={overButton}
									onMouseLeave={leaveButton}
								>
									Add Pokemon
								</button>
							</div>
						</section>
						<section className="card-back">
							<div className="pokemon-card-back">
								<div className="pokemon-stats-back">
									<h4>Height: {Math.round(height * 10)} cm </h4>
									<h4>Weight: {Math.round(weight * 0.1)} kg </h4>
									<h4 className="habitat">Habitat: {habitat}</h4>
									{legendary ? <h4>Legendary</h4> : null}
									{mythical ? <h4>Mythical</h4> : null}
									{ancient ? <h4>Ancient</h4> : null}
								</div>
								<div className="pokemon-entry-back">
									<p>{entry}</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</CardFlipAnim>
		</>
	);
};

Pokemon.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	number: PropTypes.number,
	type1: PropTypes.string,
	type2: PropTypes.string,
	imgURL: PropTypes.string,
	height: PropTypes.number,
	weight: PropTypes.number,
	entry: PropTypes.string,
	habitat: PropTypes.string,
	legendary: PropTypes.bool,
	mythical: PropTypes.bool,
	ancient: PropTypes.bool,
	teamId: PropTypes.number,
	addPokemonToTeam: PropTypes.func,
	fetchPokemonTeams: PropTypes.func,
	currentTeam: PropTypes.array,
};

export default connect(
	state => ({
		currentTeam: state.teams.currentTeam,
	}),
	{
		addPokemonToTeam: teamMembers.addPokemonToTeam,
		fetchPokemonTeams: teams.fetchPokemonTeams,
	}
)(Pokemon);
