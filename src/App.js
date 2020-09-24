import React, { useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";

function App() {


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                console.log(response.data)
                let results = response.data.results;
            })
  })

  return (
    <div className="App">
      <h2>Gotta Catch 'em All!</h2>
      <PokemonList />
    </div>
  );
}

export default App;
