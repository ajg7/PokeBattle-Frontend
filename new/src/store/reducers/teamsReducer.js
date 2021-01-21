import { teams } from "../actions";

const initialState = {
	teamData: [],
	teamId: 0,
	teams: [],
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
		case teams.FETCH_POKEMON_TEAM_MEMBERS:
			return {
				...state,
				teams: action.payload,
			};
		default:
			return state;
	}
};
