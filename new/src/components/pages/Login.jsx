import React from "react";
import { AuthForm } from "../common/";

const Login = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
			</header>
			<section>
				<AuthForm formType="Login" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="/signup">Sign Up</a>
				</p>
			</footer>
		</div>
	);
};

export default Login;
