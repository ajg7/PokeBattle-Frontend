import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";

const App = props => {

  return (
    <div className="App">
      <h2>Gotta Catch 'em All!</h2>
      <PokemonList />
    </div>
  );
}


export default App;
