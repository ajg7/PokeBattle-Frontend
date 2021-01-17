import React from "react";

const Signup = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
			</header>
			<section>
				<h2>Sign Up</h2>
				<form>
					<label>Email</label>
					<input />
					<label>Password</label>
					<input />
				</form>
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
