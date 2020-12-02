import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PokemonList from "./components/PokemonList";
import OnDeck from "./components/OnDeck";
import "./styles/css/reset.css";
import BattlePage from "./components/BattlePage";


const App = () => {

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/*Pokemon List is a private route, fix later*/}
      <Route exact path="/pokemon_list" component={PokemonList} />
      <Route exact path="/on_deck" component={OnDeck} />
      <Route exact path="/battle" component={BattlePage} />
    </>
  );
}

export default App;
