import React from "react";
import { AuthForm } from "../common/";

const Signup = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
			</header>
			<section>
				<h2>Sign Up</h2>
				<AuthForm formType="Signup" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="/login">Log In</a>
				</p>
			</footer>
		</div>
	);
};

export default Signup;
