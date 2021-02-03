import React from "react";
import pageNotFoundPika from "../../assets/pageNotFoundPika.gif";
import { StyledIntermediateRoutes } from "../../styles/common";

const NotFoundPage = () => {
	return (
		<StyledIntermediateRoutes>
			<h2>404 Not Found</h2>
			<img src={pageNotFoundPika} alt={"page not found pikachu"} />
		</StyledIntermediateRoutes>
	);
};

export default NotFoundPage;
