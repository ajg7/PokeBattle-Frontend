import React from "react";
import { useParams } from "react-router-dom";

const BattlePage = () => {
	const params = useParams();
	console.log(params);

	return (
		<div>
			<header>
				<h3>Player Team Name</h3>
				<div>
					<h3>Pokemon Team</h3>
				</div>
			</header>
			<section>
				<div>
					<h3>Arena</h3>
				</div>
			</section>
			<footer>
				<h3>Challenger Team Name</h3>
				<div>
					<h3>Pokemon Team</h3>
				</div>
			</footer>
		</div>
	);
};

export default BattlePage;
