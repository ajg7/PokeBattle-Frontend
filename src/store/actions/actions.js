import axios from "axios";

export const FETCH_POKEMON_LIST = "FETCH_POKEMON_LIST";
export const FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_SUCCESS_LIST";
export const FETCH_POKEMON_LIST_ERROR = "FETCH_POKEMON_ERROR_LIST";

export const fetchPokemonList = () => {
    return dispatch => {
        dispatch({ type: FETCH_POKEMON_LIST })
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                console.log(response.results)
                const results = response.data.results;
                dispatch({ type: FETCH_POKEMON_LIST_SUCCESS, payload: results})
            })
            .catch(error => {
                dispatch({ type: FETCH_POKEMON_LIST_ERROR, payload: { message: "You blacked out!" }})
            })
    }
}

