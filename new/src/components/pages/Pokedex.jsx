import React from "react";

const Pokedex = () => {
	return (
		<div>
			<header>
				<h2>Pokedex</h2>
				<form>
					<input placeholder={"Search Pokemon"} />
				</form>
				<select>
					<option>--Select Type--</option>
					<option>The types will be mapped over to make this list</option>
				</select>
				<select>
					<option>--Alphabet--</option>
					<option>A - Z</option>
					<option>Z - A</option>
				</select>
			</header>
			<section>
				<div>
					<h3>Cards will go here</h3>
				</div>
			</section>
			<footer>
				<nav>
					<h3>Home</h3>
					<h3>Logout</h3>
				</nav>
			</footer>
		</div>
	);
};

export default Pokedex;
