import {
    FETCH_POKEMON_LIST,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR, 
    MAKE_POKEMON_TEAM
} from "../actions";

const initialState = {
    pokemon: [],
    isLoading: true,
    errorMessage: "",
    pokemonTeam: [],
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
            }
        case FETCH_POKEMON_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message
            }
        case MAKE_POKEMON_TEAM:
            return {
                ...state,
                pokemonTeam: state.pokemonTeam.length < 6 ? [...state.pokemonTeam, action.payload] : state.pokemonTeam,
                isLoading: false
            }
        default:
            return state;
    }
}