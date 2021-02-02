import { teamMembers } from "../actions";

const initialState = {
	pokemonHasBeenAdded: false,
	pokemonHasBeenDeleted: false,
	pokemonInTeam: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teamMembers.ADD_POKEMON_TO_A_TEAM:
			return {
				...state,
				pokemonHasBeenAdded: action.payload === 1 ? true : false,
			};
		case teamMembers.DELETE_POKEMON_FROM_TEAM:
			return {
				pokemonHasBeenAdded: false,
				pokemonHasBeenDeleted: action.payload === 1 ? true : false,
			};
		case teamMembers.GET_POKEMON_IN_SPECIFIC_TEAM:
			return {
				...state,
				pokemonInTeam: action.payload,
			};
		default:
			return state;
	}
};
