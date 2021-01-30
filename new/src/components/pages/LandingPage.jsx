import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions/";
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/pages";
import { Button } from "../common/";

const LandingPage = props => {
	const history = useHistory();
	const signupRouteHandler = () => history.push("/signup");
	const loginRouteHandler = () => history.push("/login");
	const { fetchFeaturedPokemon, featuredPokemon } = props;

	useEffect(() => {
		fetchFeaturedPokemon();
	}, [fetchFeaturedPokemon]);

	return (
		<StyledLandingPage>
			<header>
				<h1>PokeBattle</h1>
					{/*Button has a div and then button*/}
					<nav>
					<Button handleClick={loginRouteHandler} buttonText={"Log In"} />
					<Button handleClick={signupRouteHandler} buttonText={"Sign Up"} />
					</nav>
			</header>
			<section>
				<img src={featuredPokemon.modern_imgURL} alt="featured pokemon" />
			</section>
			<footer>
				<h3>Created By: A.J. Gebara</h3>
				<h3>
					Special Thanks to PokeApi for the Data and to Lambda School for Giving Me the
					Tools to Excel!
				</h3>
				<h3>
					Check them out at <a href="https://pokeapi.co/">PokeApi</a> and{" "}
					<a href="https://lambdaschool.com/">Lambda School</a>
				</h3>
				<h3>
					Check out my <a href="https://github.com/ajg7">GitHub</a>
				</h3>
			</footer>
		</StyledLandingPage>
	);
};

LandingPage.propTypes = {
	fetchFeaturedPokemon: PropTypes.func,
	featuredPokemon: PropTypes.any,
};

export default connect(
	state => ({
		featuredPokemon: state.pokemon.featuredPokemon,
	}),
	{
		fetchFeaturedPokemon: pokemon.fetchFeaturedPokemon,
	}
)(LandingPage);
