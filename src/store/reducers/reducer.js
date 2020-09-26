import {
    FETCH_POKEMON_LIST,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR, 
    MAKE_POKEMON_TEAM,
    // POKEMON_TEAM_IS_FULL
} from "../actions";

const initialState = {
    pokemon: [],
    isLoading: true,
    errorMessage: "",
    chosenPokemon: ""
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
                chosenPokemon: action.payload,
                isLoading: false
            }
        // case POKEMON_TEAM_IS_FULL:
        //     return {
        //         ...state,
        //         errorMessage: action.payload.message
        //     }
        default:
            return state;
    }
}