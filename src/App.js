import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
import LandingPage from "./components/pages/LandingPage";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import PokemonList from "./components/pages/PokemonList";
import OnDeck from "./components/pages/OnDeck";
import "./styles/css/reset.css";
import BattlePage from "./components/pages/BattlePage";


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
