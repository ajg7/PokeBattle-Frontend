import { pokemon } from "../actions";

const initialState = {
	pokemonOfTheDay: {},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case pokemon.FETCH_POKEMON_OF_THE_DAY:
			return {
				pokemonOfTheDay: action.payload,
			};
		default:
			return state;
	}
};
