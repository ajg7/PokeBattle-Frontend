import {
    ERROR_HANDLING,
    FETCH_POKEMON,
    MAKE_TEAM,
    DELETE_TEAM,
    DRAGGED_POKEMON
} from "../actions"

const initialState = {
    pokemonData: [],
    teamId: 0,
    userId: 0,
    deletion: "",
    error: "",
    selectedPokemon: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                pokemonData: action.payload
            }
        case ERROR_HANDLING:
            return {
                ...state,
                error: action.payload.message,
            }
        case MAKE_TEAM:
            return {
                ...state,
                teamId: action.payload.teamId,
                userId: action.payload.userId
            }
        case DELETE_TEAM:
            return {
                ...state,
                deletion: action.payload
            }
        case DRAGGED_POKEMON:
            return {
                ...state,
                selectedPokemon: state.selectedPokemon.length < 6 ? [...state.selectedPokemon, action.payload] : [...state.selectedPokemon]
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