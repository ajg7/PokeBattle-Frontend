import React from "react";
import { useHistory } from "react-router-dom";
import { StyledAuthPages } from "../../styles/pages";
import { AuthForm } from "../common/";

const Signup = () => {
	const history = useHistory();
	const loginHandler = () => history.push("/login");

	return (
		<StyledAuthPages>
			<header>
				<h1>PokéBattle</h1>
				<h3>Sign Up</h3>
			</header>
			<section>
				<AuthForm formType="Signup" />
			</section>
			<footer>
				<p>
					Already have an account? <span onClick={loginHandler}>Login</span>
				</p>
			</footer>
		</StyledAuthPages>
	);
};

export default Signup;
