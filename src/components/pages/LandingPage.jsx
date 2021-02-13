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
				<h1>PokéBattle</h1>
				<nav>
					<Button handleClick={loginRouteHandler} buttonText={"Log In"} />
					<Button handleClick={signupRouteHandler} buttonText={"Sign Up"} />
				</nav>
			</header>
			<section>
				<img
					src={
						Math.round(Math.random() * 25) < 23
							? featuredPokemon.modern_imgURL
							: featuredPokemon.shiny_imgURL
					}
					alt="featured pokemon"
					className="featured-pokemon"
				/>
			</section>
			<footer>
				<p>Created By: A.J. Gebara</p>
				<p>
					Special Thanks to PokeApi for the Data and to Lambda School for Giving Me the
					Tools to Excel!
				</p>
				<p>
					Check them out at <a href="https://pokeapi.co/">PokeApi</a> and{" "}
					<a href="https://lambdaschool.com/">Lambda School</a>
				</p>
				<p>
					Also Check out my <a href="https://github.com/ajg7">GitHub</a>
				</p>
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
