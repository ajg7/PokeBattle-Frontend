import React, { useEffect } from "react";
import loadingPika from "../../assets/loadingPika.gif";
import { useHistory } from "react-router-dom";
import { StyledIntermediateRoutes } from "../../styles/common";

const Loading = () => {
	const history = useHistory();
	useEffect(() => {
		setTimeout(() => history.push("/teams/"), 2000);
	}, [history]);

	return (
		<StyledIntermediateRoutes>
			<h2>Loading...</h2>
			<img src={loadingPika} alt="loading image" />
		</StyledIntermediateRoutes>
	);
};

export default Loading;
