import React, { useEffect } from "react";
import loadingPika from "../../assets/loadingPika.gif";
import { useHistory } from "react-router-dom";

const Loading = () => {
	const history = useHistory();
	const userId = localStorage.getItem("userId");
	console.log(userId);
	useEffect(() => {
		setTimeout(() => history.push(`/teams/${userId}`), 3000);
	}, []);

	return (
		<div>
			<header>
				<h2>Loading...</h2>
			</header>
			<section>
				<img src={loadingPika} alt="loading image" />
			</section>
			<footer></footer>
		</div>
	);
};

export default Loading;
