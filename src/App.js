import React from "react";
import { Route, Link } from "react-router-dom";
// import { connect } from "react-redux";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PokemonList from "./components/PokemonList";
// import PokemonTeam from "./components/PokemonTeam";
import "./css/reset.css";


const App = ({ pokemonTeam }) => {

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/*Pokemon List is a private route, fix later*/}
      <Route exact path="/pokemon_list" component={PokemonList} />
    </>
  );
}

/*
const mapStateToProps = state => {
  return {
    pokemonTeam: state.pokemonTeam
  }
}*/

export default App;
