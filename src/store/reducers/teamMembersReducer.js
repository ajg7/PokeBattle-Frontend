import { teamMembers } from "../actions";

const initialState = {
    selectedPokemon: [],
    team: Array(6).fill(null),
    pokemonHasBeenRemoved: false,
    currIndex: 0,
    isAdding: false,
    isSwapping: false,
    isRemoving: false,
}

export const reducer = (state = initialState, action) => {  
    switch (action.type) {
        case teamMembers.DRAGGED_POKEMON:
            return {
                ...state,
                selectedPokemon: action.payload
            }
        case teamMembers.ADD_POKEMON:
            const index = +action.payload.index;
            const pokemon = action.payload.pokemon;
            state.team[index] = pokemon;
            return {
                ...state,
                selectedPokemon: state.selectedPokemon,
                team: state.team
            }
        case teamMembers.SWAP_POKEMON:
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
        case teamMembers.UPDATE_CURR_INDEX:
            return {
                ...state,
                currIndex: action.payload
            }
        case teamMembers.REMOVE_POKEMON:
            const currIndex = action.payload;
            state.team[currIndex] = null;
            return {
                ...state,
                pokemonHasBeenRemoved: true,
                team: state.team
            }
        case teamMembers.IS_ADDING:
            return {
                ...state,
                isAdding: action.payload.add,
                isSwapping: action.payload.swap,
                pokemonHasBeenRemoved: false,
                isRemoving: false
            }
        case teamMembers.IS_SWAPPING:
            return {
                ...state,
                isAdding: false,
                isSwapping: action.payload,
                isRemoving: false
            }
        case teamMembers.IS_REMOVING:
            return {
                ...state,
                isAdding: false,
                isSwapping: false,
                isRemoving: action.payload
            }
        default:
            return state
    }
}