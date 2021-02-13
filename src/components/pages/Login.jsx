import React from "react";
import { useHistory } from "react-router-dom";
import { StyledAuthPages } from "../../styles/pages";
import { AuthForm } from "../common/";

const Login = () => {
	const history = useHistory();
	const signupHandler = () => history.push("/signup");

	return (
		<StyledAuthPages>
			<header>
				<h1>PokéBattle</h1>
				<h3>Login</h3>
			</header>
			<section>
				<AuthForm formType="Login" />
			</section>
			<footer>
				<p>
					Already have an account? <span onClick={signupHandler}>Sign Up</span>
				</p>
			</footer>
		</StyledAuthPages>
	);
};

export default Login;
