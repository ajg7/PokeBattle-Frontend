import axios from "axios";
import { BattleManager } from "../../classes/BattleManager";

/*
FetchPokemon
SetFeaturedPokemon
*/

export const FETCH_POKEMON = "FETCH_POKEMON_SUCCESS";
export const fetchPokemon = () => async dispatch => {
    const map = {};
    const { data } = await axios.get("http://localhost:7000/pokemon");
    for (const pokemon of data) {
        map[pokemon.name] = pokemon;
    }
    try {
        dispatch({ type: FETCH_POKEMON, payload: { data, map } })
    }
    catch {
        throw new Error()
    }
}

export const SET_FEATURED_POKEMON = "FEATURED_POKEMON";
export const setFeaturedPokemon = () => async dispatch => {
    const randomNum = BattleManager.random();
    const { imgURL, entry, name } = await axios.get(`http://localhost:7000/pokemon/${randomNum}`)
    try {
        dispatch({ type: SET_FEATURED_POKEMON, payload: { imgURL, entry, name } })
    }
    catch {
        throw new Error();
    }     
}
