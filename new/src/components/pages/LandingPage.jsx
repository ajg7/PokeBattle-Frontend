import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions/";
import { useHistory } from "react-router-dom";

const LandingPage = props => {
	const history = useHistory();
	const signupRouteHandler = () => history.push("/signup");
	const loginRouteHandler = () => history.push("/login");
	const { fetchPokemonOfTheDay, pokemonOfTheDay } = props;

	useEffect(() => {
		fetchPokemonOfTheDay();
	}, [fetchPokemonOfTheDay]);

	return (
		<div className="landing-page">
			<header>
				<h1>PokeBattle</h1>
				<nav>
					<button onClick={signupRouteHandler}>Sign Up</button>
					<button onClick={loginRouteHandler}>Log In</button>
				</nav>
			</header>
			<section>
				<img src={`${pokemonOfTheDay}`} alt="pokemon of the day" />
			</section>
			<footer>
				<h3>Created By: A.J. Gebara</h3>
				<h3>Special Thanks to PokeApi for the Data</h3>
				<h4>
					Check them out at <a href="https://pokeapi.co/">https://pokeapi.co/</a>
				</h4>
			</footer>
		</div>
	);
};


LandingPage.propTypes = {
	fetchPokemonOfTheDay: PropTypes.func,
	pokemonOfTheDay: PropTypes.object
};


export default connect(
    state => ({
        pokemonOfTheDay: state.pokemon.pokemonOfTheDay,
}), { 
    fetchPokemonOfTheDay: pokemon.fetchPokemonOfTheDay
})(LandingPage);
