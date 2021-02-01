import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalReset, Mobile, GlobalStyles } from "./styles/global";
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
	WhosThatPokemon,
	NotFoundPage,
	About,
} from "./components/pages";

const App = props => {
	const { challengerTeam, loading, teamName } = props;
	return (
		<>
			<GlobalReset />
			<GlobalStyles />
			<Mobile />
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/loading" component={Loading}>
					{loading ? null : <Redirect to="/" />}
				</Route>
				<PrivateRoute exact path="/pokedex/:teamId" component={Pokedex} />
				<PrivateRoute exact path="/teams" component={Teams} />
				<PrivateRoute exact path="/records/:teamId" component={Records}>
					{teamName ? null : <Redirect to="/teams" />}
				</PrivateRoute>
				<PrivateRoute exact path="/battle/:teamId" component={BattlePage}>
					{challengerTeam.length === 0 ? <Redirect to="/teams" /> : null}
				</PrivateRoute>
				<PrivateRoute exact path="/whos_that_pokemon" component={WhosThatPokemon} />
				<Route exact path="/" component={LandingPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</>
	);
};

App.propTypes = {
	challengerTeam: PropTypes.array,
	loading: PropTypes.bool,
	teamName: PropTypes.any,
};

export default connect(
	state => ({
		challengerTeam: state.pokemon.challengerTeam,
		loading: state.teams.loading,
		teamName: state.teams.teamName,
	}),
	{}
)(App);
