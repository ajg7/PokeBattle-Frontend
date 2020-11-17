import {
    ERROR_HANDLING,
    FETCH_POKEMON,
    MAKE_TEAM,
    DELETE_TEAM,
    SAVE_TEAM,
    FETCH_POKEMON_TEAM,
    DRAGGED_POKEMON,
    ADD_POKEMON,
    SWAP_POKEMON,
    REMOVE_POKEMON,
    UPDATE_CURR_INDEX,
    IS_ADDING,
    IS_SWAPPING,
    IS_REMOVING
} from "../actions"

const initialState = {
    pokemonData: [],
    teamId: 0,
    userId: 0,
    deletion: "",
    error: "",
    selectedPokemon: [],
    currIndex: 0,
    pokemonHasBeenRemoved: false,
    isAdding: false,
    isSwapping: false,
    isRemoving: false,
    team: Array(6).fill(null),
    teamData: []
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
            localStorage.setItem("teamId", action.payload.teamId)
            return {
                ...state,
                teamId: action.payload.teamId,
                userId: action.payload.userId
            }
        case FETCH_POKEMON_TEAM:
            return {
                ...state,
                teamData: action.payload
            }
        case SAVE_TEAM:
            localStorage.setItem("team", state.team)
            return {
                ...state,
                teamData: action.payload
            }
        case DELETE_TEAM:
            return {
                ...state,
                deletion: action.payload,
                team: Array(6).fill(null)
            }
        case DRAGGED_POKEMON:
            return {
                ...state,
                selectedPokemon: action.payload
            }
        case ADD_POKEMON:
            const index = +action.payload.index;
            const pokemon = action.payload.pokemon;
            state.team[index] = pokemon;
            return {
                ...state,
                selectedPokemon: state.selectedPokemon,
                team: state.team
            }
        case SWAP_POKEMON:
            const i1 = action.payload.prevIndex;
            const i2 = action.payload.nextIndex;
            const prevPoke = action.payload.prevPokemon;
            const poke = action.payload.newPokemon;
            if (!state.pokemonHasBeenRemoved) {
                state.team[i2] = poke;
                state.team[i1] = prevPoke;
            } else {
                state.pokemonHasBeenRemoved = false;
                state.team[i2] = poke;
                state.team[i1] = null;
            }
            return{
                ...state,
                selectedPokemon: state.selectedPokemon,
                pokemonHasBeenRemoved: false,
                team: state.team
            }
        case UPDATE_CURR_INDEX:
            return {
                ...state,
                currIndex: action.payload
            }
        case REMOVE_POKEMON:
            const currIndex = action.payload;
            state.team[currIndex] = null;
            return {
                ...state,
                pokemonHasBeenRemoved: true,
                team: state.team
            }
        case IS_ADDING:
            return {
                ...state,
                isAdding: action.payload.add,
                isSwapping: action.payload.swap,
                pokemonHasBeenRemoved: false,
                isRemoving: false
            }
        case IS_SWAPPING:
            return {
                ...state,
                isAdding: false,
                isSwapping: action.payload,
                isRemoving: false
            }
        case IS_REMOVING:
            return {
                ...state,
                isAdding: false,
                isSwapping: false,
                isRemoving: action.payload
            }
        default:
            return state;
    }
}
