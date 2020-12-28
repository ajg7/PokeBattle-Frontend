import axios from "axios";
import { BattleManager } from "../../classes/BattleManager";

export const FETCH_POKEMON = "FETCH_POKEMON";
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
    const result = await axios.get(`http://localhost:7000/pokemon/${randomNum}`)
    const { imgURL, entry, name } = result.data[0];
    try {
        console.log(imgURL, entry, name)
        dispatch({ type: SET_FEATURED_POKEMON, payload: {imgURL, entry, name} })
    }
    catch {
        throw new Error();
    }
}
