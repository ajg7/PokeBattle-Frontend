import { whosThatPokemon } from "../actions";

const initialState = {
	totalPoints: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case whosThatPokemon.GET_TOTAL_POINTS:
			return {
				totalPoints: action.payload,
			};
		case whosThatPokemon.updateTotalPoints:
			return {
				...state,
			};
		default:
			return state;
	}
};
