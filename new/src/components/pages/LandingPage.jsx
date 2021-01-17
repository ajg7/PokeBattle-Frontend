import React from "react";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<header>
				<h1>PokeBattle</h1>
				<nav>
					<button>Sign Up</button>
					<button>Log In</button>
				</nav>
			</header>
			<section>
				<img src={""} alt="pokemon of the day" />
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

export default LandingPage;
