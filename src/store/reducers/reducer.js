import {
    FETCH_POKEMON_LIST,
    FETCH_POKEMON_LIST_SUCCESS,
    FETCH_POKEMON_LIST_ERROR,
} from "../actions";

const initialState = {
    pokemon: [],
    isLoading: true,
    errorMessage: ""
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
                pokemon: action.payload,
                isLoading: false
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