import { battle } from "../actions";

const initialState = {
	battleId: 0,
	playerScore: 0,
	challengerScore: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case battle.MAKE_A_BATTLE:
			return {
				...state,
				battleId: action.payload,
			};
		case battle.UPDATE_SCORES:
			return {
				...state,
				playerScore: action.payload.playerScore,
				challengerScore: action.payload.challengerScore,
			};
		default:
			return state;
	}
};
