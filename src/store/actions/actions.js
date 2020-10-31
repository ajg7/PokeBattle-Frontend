import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_POKEMON_LIST = "FETCH_POKEMON_LIST";
export const FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_SUCCESS_LIST";
export const FETCH_POKEMON_LIST_ERROR = "FETCH_POKEMON_ERROR_LIST";
export const MAKE_POKEMON_TEAM = "MAKE_POKEMON_TEAM";

export const fetchPokemonList = props => dispatch => {
    console.log(props)
        dispatch({ type: FETCH_POKEMON_LIST }) 
        axios.get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
            .then(response => {
                const data = response.data;
                dispatch({ type: FETCH_POKEMON_LIST_SUCCESS, payload: data })
            })
            .catch(error => {
                dispatch({ type: FETCH_POKEMON_LIST_ERROR, payload: { message: "You blacked out!" }})
            })
}

export const pokemonTeamMaker = userId => dispatch => {



        // console.log(pokemon)
        // axios.post("https://pokemon-server-ajg7.herokuapp.com/pokemon", newPokemonDataObject)
        //     .then(response => {
        //         console.log(response.config);
        //         dispatch({ type: MAKE_POKEMON_TEAM, payload: {name: pokemon, data: pokemonDataObject }})
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
}
