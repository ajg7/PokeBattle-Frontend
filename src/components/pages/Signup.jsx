import React from "react";
import { StyledAuthPages } from "../../styles/pages";
import { AuthForm } from "../common/";

const Signup = () => {
	return (
		<StyledAuthPages>
			<header>
				<h1>PokéBattle</h1>
			</header>
			<section>
				<AuthForm formType="Signup" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="https://musing-euler-334a9c.netlify.app/login">Log In</a>
				</p>
			</footer>
		</StyledAuthPages>
	);
};

export default Signup;
