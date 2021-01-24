import { battle } from "../actions";

const initialState = {
	battleId: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case battle.MAKE_A_BATTLE:
			return {
				...state,
				battleId: action.payload,
			};
		default:
			return state;
	}
};
