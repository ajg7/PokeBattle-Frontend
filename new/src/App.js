import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalReset, Mobile } from "./styles/global";
import { LandingPage, Login, Signup } from "./components/pages";

const App = () => {
	return (
		<>
			<GlobalReset />
			<Mobile />
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</>
	);
};

export default App;
