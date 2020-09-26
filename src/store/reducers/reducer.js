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
    pokemonTeam: []
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
            const newPokemonTeam = state.pokemonTeam.length < 6 ? [...state.pokemonTeam, action.payload] : state.pokemonTeam
            localStorage.setItem("PokemonTeam", newPokemonTeam);
            return {
                ...state,
                pokemonTeam: newPokemonTeam,
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