import { pokemon } from "../actions";

const initialState = {
	featuredPokemon: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case pokemon.FETCH_FEATURED_POKEMON:
			return {
				featuredPokemon: action.payload,
			};
		default:
			return state;
	}
};
