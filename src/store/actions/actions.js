import axios from "axios";

export const FETCH_POKEMON = "FETCH_POKEMON";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";

export const fetchPokemon = () => {
    return dispatch => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                console.log(response)
                let results = response.results;
                dispatch({ type: FETCH_POKEMON_SUCCESS, payload: results})
            })
            .catch(error => {
                dispatch({ type: FETCH_POKEMON_ERROR, payload: { message: "You blacked out!" }})
            })
    }
}

