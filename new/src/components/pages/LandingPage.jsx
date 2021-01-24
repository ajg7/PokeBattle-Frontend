import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions/";
import { useHistory } from "react-router-dom";

const LandingPage = props => {
	const history = useHistory();
	const signupRouteHandler = () => history.push("/signup");
	const loginRouteHandler = () => history.push("/login");
	const { fetchFeaturedPokemon, featuredPokemon } = props;

	useEffect(() => {
		fetchFeaturedPokemon();
	}, [fetchFeaturedPokemon]);

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
				<img src={`${featuredPokemon}`} alt="featured pokemon" />
			</section>
			<footer>
				<h3>Created By: A.J. Gebara</h3>
				<h3>Special Thanks to PokeApi for the Data and to Lambda School for Giving Me the Tools to Excel!</h3>
				<h4>
					Check them out at <a href="https://pokeapi.co/">PokeApi</a> and <a href="https://lambdaschool.com/">Lambda School</a>
				</h4>
			</footer>
		</div>
	);
};

LandingPage.propTypes = {
	fetchFeaturedPokemon: PropTypes.func,
	featuredPokemon: PropTypes.string,
};

export default connect(
	state => ({
		featuredPokemon: state.pokemon.featuredPokemon,
	}),
	{
		fetchFeaturedPokemon: pokemon.fetchFeaturedPokemon,
	}
)(LandingPage);
