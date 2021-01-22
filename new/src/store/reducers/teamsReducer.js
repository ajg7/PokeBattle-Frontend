import { teams } from "../actions";

const initialState = {
	teamName: "",
	teamId: 0,
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
				newTeamId: action.payload.data,
				teams: action.payload.pokemon,
			};
		case teams.FETCH_POKEMON_TEAMS:
			return {
				...state,
				teams: action.payload,
			};
		case teams.DELETE_TEAM:
			return {
				...state,
				teams: action.payload,
			};
		case teams.FETCH_TEAM_BY_ID:
			return {
				...state,
				teamId: +action.payload.teamId,
				teamName: action.payload.teamName,
				team: [],
			};
		default:
			return state;
	}
};
