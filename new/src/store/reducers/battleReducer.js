import { battle } from "../actions";

const initialState = {
	battleId: 0,
	playerScore: 0,
	challengerScore: 0,
	wins: 0,
	losses: 0,
	ties: 0,
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
		case battle.GET_BATTLE_DATA:
			return {
				...state,
				wins: action.payload.wins.length,
				losses: action.payload.losses.length,
				ties: action.payload.ties.length,
			};
		default:
			return state;
	}
};
