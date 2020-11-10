import {
    ERROR_HANDLING,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_REQUEST
} from "../actions"

const initialState = {
    pokemonData: [],
    loadingPokemon: false,
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loadingPokemon: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonData: action.payload,
                loadingPokemon: false
            }
        case ERROR_HANDLING:
            return {
                ...state,
                error: action.payload.message,
                loadingPokemon: false
            }
        default:
            return state;
    }
}

// const initialState = {
//     pokemon: [],
//     isLoading: true,
//     errorMessage: "",
//     pokemonTeam: [],
//     pokemonDataObject: []
// }

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_POKEMON_LIST:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case FETCH_POKEMON_LIST_SUCCESS:
//             return {
//                 ...state,
//                 pokemon: action.payload.results,
//                 isLoading: false,
//             }
//         case FETCH_POKEMON_LIST_ERROR:
//             return {
//                 ...state,
//                 isLoading: false,
//                 errorMessage: action.payload.message
//             }
//         case MAKE_POKEMON_TEAM:
//             return {
//                 ...state,
//                 pokemonTeam: state.pokemonTeam.length < 6 ? [...state.pokemonTeam, action.payload.name] : state.pokemonTeam,
//                 pokemonDataObject: [...state.pokemonDataObject, action.payload.data],
//                 isLoading: false
//             }
//         default:
//             return state;
//     }
// }