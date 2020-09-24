import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPokemonList } from "./store/actions";
import PokemonList from "./components/PokemonList";

const App = props => {
  
  const { fetchPokemonList } = props;

  useEffect(() => {
    fetchPokemonList()
  }, [fetchPokemonList])

  return (
    <div className="App">
      <h2>Gotta Catch 'em All!</h2>
      <PokemonList />
    </div>
  );
}


export default connect(null, { fetchPokemonList })(App);
