import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalReset, Mobile } from "./styles/global";
import { LandingPage, Login, Signup, Teams, Pokedex, Loading } from "./components/pages";

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
				<Route path="/pokedex">
					<Pokedex />
				</Route>
				<Route path="/teams">
					<Teams />
				</Route>
				<Route path="/loading">
					<Loading />
				</Route>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</>
	);
};

export default App;
