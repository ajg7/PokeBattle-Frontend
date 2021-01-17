import React from "react";
import { GlobalReset, Mobile } from "./styles/global";
import { LandingPage } from "./components/pages";

const App = () => {
	return (
		<>
			<GlobalReset />
			<Mobile />
			<LandingPage />
		</>
	);
};

export default App;
