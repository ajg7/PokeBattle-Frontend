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
	Records,
} from "./components/pages";

const App = props => {
	const { challengerTeam, loading, teamName } = props;
	return (
		<>
			<GlobalReset />
			<Mobile />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/loading" component={Loading}>
					{loading ? null : <Redirect to="/" />}
				</Route>
				<PrivateRoute path="/pokedex/:teamId" component={Pokedex} />
				<PrivateRoute path="/teams" component={Teams} />
				<PrivateRoute path="/records/:teamId" component={Records}>
					{teamName ? null : <Redirect to="/teams" />}
				</PrivateRoute>
				<PrivateRoute path="/battle/:teamId" component={BattlePage}>
					{challengerTeam.length === 0 ? <Redirect to="/teams" /> : null}
				</PrivateRoute>
				<Route path="/" component={LandingPage} />
			</Switch>
		</>
	);
};

App.propTypes = {
	challengerTeam: PropTypes.array,
	loading: PropTypes.bool,
	teamName: PropTypes.string,
};

export default connect(
	state => ({
		challengerTeam: state.pokemon.challengerTeam,
		loading: state.teams.loading,
		teamName: state.teams.teamName,
	}),
	{}
)(App);
