import { teams } from "../actions";

const initialState = {
	teamNames: [],
	newTeamId: 0,
	teams: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teams.FETCH_TEAM_NAMES:
			return {
				...state,
				teamNames: action.payload,
			};
		case teams.MAKE_NEW_TEAM:
			return {
				...state,
				newTeamId: action.payload,
			};
		case teams.FETCH_POKEMON_TEAMS:
			return {
				...state,
				teams: action.payload,
			};
		case teams.DELETE_TEAM:
			return {
				...state,
			};
		default:
			return state;
	}
};
