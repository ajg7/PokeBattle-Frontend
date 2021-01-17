import React from "react";

const Teams = () => {
	return (
		<div>
			<header>
				<h1>PokeBattle</h1>
				<nav>
					<img src={""} alt="help" />
					<button>Log Out</button>
				</nav>
			</header>
			<section>
				<h2>Teams</h2>
				<div>
					<div>
						<h3>Team Alpha</h3>
						<p>team members will go here</p>
					</div>
					<div>
						<h3>Most Valuable Team</h3>
						<h4>Team Alpha</h4>
					</div>
					<div>
						<h3>Win/Loss Record</h3>
					</div>
				</div>
			</section>
			<footer></footer>
		</div>
	);
};

export default Teams;
