import {
    FETCH_POKEMON,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_ERROR
} from "../actions";

const initialState = {
    pokemon: [],
    isLoading: true,
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isLoading: false
            }
        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message
            }
        default:
            return state;
    }
}