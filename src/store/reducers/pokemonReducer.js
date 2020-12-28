import { pokemon } from "../actions";

const initialState = {
    pokemonData: [],
    mappedPokemonData: [],
    featuredPokemon: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case pokemon.FETCH_POKEMON:
            return {
                ...state,
                pokemonData: action.payload.data,
                mappedPokemonData: action.payload.map
            }
        case pokemon.SET_FEATURED_POKEMON:
            return {
                ...state,
                featuredPokemon: action.payload
            }
        default:
            return state
    }
}