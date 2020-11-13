import {
    ERROR_HANDLING,
    FETCH_POKEMON,
    MAKE_TEAM,
    DELETE_TEAM,
    DRAGGED_POKEMON,
    ADD_POKEMON,
    SWAP_POKEMON,
    REMOVE_POKEMON
} from "../actions"

const initialState = {
    pokemonData: [],
    teamId: 0,
    userId: 0,
    deletion: "",
    error: "",
    selectedPokemon: [],
    team: Array(6).fill(null)
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
                selectedPokemon: action.payload
            }
        case ADD_POKEMON:
            const index = +action.payload.index;
            const pokemon = action.payload.pokemon;
            state.team[index] = pokemon 
            return {
                ...state,
                team: state.team,
            }
        case SWAP_POKEMON:
            const i1 = action.payload.prevIndex;
            const i2 = action.payload.nextIndex;
            const prevPoke = action.payload.prevPokemon;
            const poke = action.payload.newPokemon;
            console.log(i2, prevPoke, i1, poke)
            state.team[i2] = poke;
            state.team[i1] = prevPoke;
            return{
                ...state,
                team: state.team
            }
        case REMOVE_POKEMON:
            return {
                ...state
            }
        default:
            return state;
    }
}
