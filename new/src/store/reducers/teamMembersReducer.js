import { teamMembers } from "../actions";

const initialState = {
	pokemonHasBeenAdded: false,
	pokemonHasBeenDeleted: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teamMembers.ADD_POKEMON_TO_A_TEAM:
			return {
				...state,
				pokemonHasBeenAdded: action.payload ? true : false,
			};
		case teamMembers.DELETE_POKEMON_FROM_TEAM:
			return {
				pokemonHasBeenAdded: false,
				pokemonHasBeenDeleted: action.payload ? true : false,
			};
		default:
			return state;
	}
};
