import React from "react";

const ErrorPage = () => {
	return (
		<div>
			<header>
				<h2>Something went wrong...</h2>
			</header>
			<section>
				<h3>Please return Home</h3>
				<button>Home</button>
			</section>
			<footer>
				<img src={""} alt="error image" />
			</footer>
		</div>
	);
};

export default ErrorPage;
