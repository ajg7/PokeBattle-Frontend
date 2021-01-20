import { teams } from "../actions";

const initialState = {
	teamData: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teams.FETCH_TEAMS_OF_USER:
			return {
				...state,
				teamData: action.payload,
			};
		default:
			return state;
	}
};
