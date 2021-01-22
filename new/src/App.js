import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalReset, Mobile } from "./styles/global";
import { PrivateRoute } from "./components/common";
import { LandingPage, Login, Signup, Teams, Pokedex, Loading } from "./components/pages";

const App = () => {
	return (
		<>
			<GlobalReset />
			<Mobile />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/loading" component={Loading} />
				<PrivateRoute path="/pokedex/:teamId" component={Pokedex} />
				<PrivateRoute path="/teams" component={Teams} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

export default App;
