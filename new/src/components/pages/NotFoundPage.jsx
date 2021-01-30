import React from "react";
import pageNotFoundPika from "../../assets/pageNotFoundPika.gif";

const NotFoundPage = () => {
	return (
		<div>
			<h3>404 Not Found</h3>
			<img src={pageNotFoundPika} alt={"page not found pikachu"} />
		</div>
	);
};

export default NotFoundPage;
