import React from "react";

const Login = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
			</header>
			<section>
				<h2>Login</h2>
				<form>
					<label>Email</label>
					<input />
					<label>Password</label>
					<input />
				</form>
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
