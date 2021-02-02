import React from "react";
import { StyledAuthPages } from "../../styles/pages";
import { AuthForm } from "../common/";

const Login = () => {
	return (
		<StyledAuthPages>
			<header>
				<h1>PokeBattle</h1>
				<nav>
					<h2>
						<a href="/">Home</a>
					</h2>
					<h2>
						<a href="/login">Login</a>
					</h2>
					<h2>
						<a href="/signup">Signup</a>
					</h2>
				</nav>
			</header>
			<section>
				<AuthForm formType="Login" />
			</section>
			<footer>
				<p>
					Already have an account? <a href="/signup">Sign Up</a>
				</p>
			</footer>
		</StyledAuthPages>
	);
};

export default Login;
