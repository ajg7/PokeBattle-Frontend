import React from "react";
import { Link } from "react-router-dom";
import { StyledAuthPages } from "../../styles/pages";
import { AuthForm } from "../common/";

const Signup = () => {
	return (
		<StyledAuthPages>
			<header>
				<h1>PokéBattle</h1>
				<nav>
					<h3>
						<Link to="/">Home</Link>
					</h3>
					<h3>
						<Link to="/login">Login</Link>
					</h3>
					<h3>
						<Link to="/signup">Signup</Link>
					</h3>
				</nav>
			</header>
			<section>
				<AuthForm formType="Signup" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="/login">Log In</a>
				</p>
			</footer>
		</StyledAuthPages>
	);
};

export default Signup;
