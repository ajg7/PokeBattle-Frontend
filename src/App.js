import React from "react";
import { Route } from "react-router-dom";
import "./styles/css/reset.css";
import "./styles/css/global.css";
import { LandingPage, Signup, Login, PokemonList, OnDeck, BattlePage, MainMenu, WhosThatPokemon } from "./components/pages";


const App = () => {

  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/*Pokemon List is a private route, fix later*/}
      <Route exact path="/main_menu" component={MainMenu} />
      <Route exact path="/pokemon_list" component={PokemonList} />
      <Route exact path="/guess_pokemon" component={WhosThatPokemon} />
      <Route exact path="/on_deck" component={OnDeck} />
      <Route exact path="/battle" component={BattlePage} />
    </>
  );
}

export default App;
