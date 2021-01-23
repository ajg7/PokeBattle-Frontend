import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalReset, Mobile } from "./styles/global";
import { PrivateRoute } from "./components/common";
import {
	LandingPage,
	Login,
	Signup,
	Teams,
	Pokedex,
	Loading,
	BattlePage,
} from "./components/pages";

const App = props => {
	const { challengerTeam } = props;
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
				<PrivateRoute path="/battle/:teamId" component={BattlePage}>
					{/*Later add 'outcome' to state, and make the condition [&& !outcome]*/}
					{challengerTeam.length === 0 ? <Redirect to="/teams" /> : null}
				</PrivateRoute>
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

App.propTypes = {
	challengerTeam: PropTypes.array,
};

export default connect(
	state => ({
		challengerTeam: state.pokemon.challengerTeam,
	}),
	{}
)(App);
