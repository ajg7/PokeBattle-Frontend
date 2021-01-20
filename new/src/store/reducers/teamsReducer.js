import { teams } from "../actions";

const initialState = {
	teamData: [],
	teamId: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teams.FETCH_TEAMS_OF_USER:
			return {
				...state,
				teamData: action.payload,
			};
		case teams.MAKE_NEW_TEAM:
			return {
				...state,
				teamId: action.payload,
			};
		default:
			return state;
	}
};
