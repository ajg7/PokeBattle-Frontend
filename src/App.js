import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PokemonList from "./components/PokemonList";
import PokemonTeam from "./components/PokemonTeam";
import "./css/styles.css";
import PokeballStorage from "./assets/PokemonStorage.png"

const App = ({ pokemonTeam }) => {

  return (
    <>
      <header>
        <h1>Gotta Catch 'em All!</h1>
        <Link to="/pokemon_team"><img src={PokeballStorage} alt="storage for your pokemon team" /></Link>
      </header>
      <div className="pokemon-app">
        <Route exact path="/" component={PokemonList}/>
      </div>
        <Route exact path="/pokemon_team" component={PokemonTeam} />
      
    </>
  );
}

const mapStateToProps = state => {
  return {
    pokemonTeam: state.pokemonTeam
  }
}

export default connect(mapStateToProps, {})(App);
