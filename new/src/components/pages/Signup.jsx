import React from "react";
import { useHistory } from "react-router-dom";
import { AuthForm, Button } from "../common/";

const Signup = () => {
	const history = useHistory();
	const landingPageHandler = () => history.goBack();
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
				<Button handleClick={landingPageHandler} buttonText={"Back"} />
			</footer>
		</div>
	);
};

export default Signup;
