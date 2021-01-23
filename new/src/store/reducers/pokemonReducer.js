import { pokemon } from "../actions";

const initialState = {
	featuredPokemon: "",
	pokemon: [],
	challengerTeam: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case pokemon.FETCH_FEATURED_POKEMON:
			return {
				...state,
				featuredPokemon: action.payload,
			};
		case pokemon.FETCH_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};
		case pokemon.FIND_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};
		case pokemon.SEARCH_BY_TYPE:
			return {
				...state,
				pokemon: action.payload,
			};
		case pokemon.ALPHABETIZE_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};
		case pokemon.OTHER_FILTERS:
			return {
				...state,
				pokemon: action.payload,
			};
		case pokemon.MAKE_CHALLENGER_TEAM:
			return {
				...state,
				challengerTeam: [
					state.pokemon[Math.round(Math.random() * 151)],
					state.pokemon[Math.round(Math.random() * 151)],
					state.pokemon[Math.round(Math.random() * 151)],
					state.pokemon[Math.round(Math.random() * 151)],
					state.pokemon[Math.round(Math.random() * 151)],
					state.pokemon[Math.round(Math.random() * 151)],
				],
			};
		default:
			return state;
	}
};
