import React from "react";
import { Route } from "react-router-dom";
import "./styles/css/reset.css";
import "./styles/css/global.css";
import { PrivateRoute } from "./components/common";
import { LandingPage, Signup, Login, PokemonList, OnDeck, BattlePage, MainMenu, WhosThatPokemon } from "./components/pages";


const App = () => {

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/main_menu" component={MainMenu} />
      <PrivateRoute exact path="/pokemon_list" component={PokemonList} />
      <PrivateRoute exact path="/guess_pokemon" component={WhosThatPokemon} />
      <PrivateRoute exact path="/on_deck" component={OnDeck} />
      <PrivateRoute exact path="/battle" component={BattlePage} />
    </>
  );
}

export default App;
