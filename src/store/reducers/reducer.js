import {
    FETCH_POKEMON_LIST,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR
} from "../actions";

const initialState = {
    pokemon: [],
    isLoading: true,
    errorMessage: "",
    nextPokemonList: "",
    previousPokemonList: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_LIST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemon: action.payload.results,
                isLoading: false,
                nextPokemonList: action.payload.next,
                previousPokemonList: action.payload.previous
            }
        case FETCH_POKEMON_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message
            }
        default:
            return state;
    }
}