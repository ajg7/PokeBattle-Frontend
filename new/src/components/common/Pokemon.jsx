import React, { useState } from "react";
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
	} = props;
	const [flipped, setFlipped] = useState(false);

	const flipHandler = () => (!flipped ? setFlipped(true) : setFlipped(false));
	const mouseLeaveHandler = () => (flipped ? setFlipped(false) : null);
	const addPokemonHandler = async event => {
		const userId = localStorage.getItem("userId");
		await addPokemonToTeam(event.target.id, teamId);
		await fetchPokemonTeams(userId);
	};

	// const dragStart = () => {
	// 	setIsAdding(true, false);
	// 	setSelectedPokemon({ id: id, name: name, img: imgURL, number: number });
	// };

	return (
		<>
			<CardFlipAnim onClick={flipHandler}>
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
								<button onClick={addPokemonHandler} id={id} name={name}>
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
};

export default connect(null, {
	addPokemonToTeam: teamMembers.addPokemonToTeam,
	fetchPokemonTeams: teams.fetchPokemonTeams,
})(Pokemon);
