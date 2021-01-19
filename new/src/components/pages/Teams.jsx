import React from "react";
import { logout } from "../../api/auth";

const Teams = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
				<nav>
					<img src={""} alt="help" />
					<button onClick={logout}>Log Out</button>
				</nav>
			</header>
			<section>
				<h2>Teams</h2>
				<div></div>
			</section>
			<footer></footer>
		</div>
	);
};

export default Teams;
