import React from "react";
import { useHistory } from "react-router-dom";
import { AuthForm, Button } from "../common/";

const Login = () => {
	const history = useHistory();
	const landingPageHandler = () => history.goBack();
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
			</header>
			<section>
				<h2>Login</h2>
				<AuthForm formType="Login" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="/signup">Sign Up</a>
				</p>
				<Button handleClick={landingPageHandler} buttonText={"Back"} />
			</footer>
		</div>
	);
};

export default Login;
