import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import "./css/styles.css";
import PokeballStorage from "./assets/PokemonStorage.png"

const App = props => {

  return (
    <>
      <header>
        <h1>Gotta Catch 'em All!</h1>
        <img src={PokeballStorage} alt="storage for your pokemon team" />
      </header>
      <div className="pokemon-app">
        <PokemonList />
      </div>
    </>
  );
}


export default App;
