import { teams } from "../actions";

const initialState = {
	teamName: "",
	teamId: 0,
	teams: [],
	currentTeam: [],
	loading: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case teams.IS_LOADING_TEAMS:
			return {
				...state,
				loading: true,
			};
		case teams.FETCH_TEAM_NAMES:
			return {
				...state,
				teamNames: action.payload,
			};
		case teams.MAKE_NEW_TEAM:
			return {
				...state,
				teamId: +action.payload.data,
				teams: action.payload.pokemon,
			};
		case teams.FETCH_POKEMON_TEAMS:
			return {
				...state,
				teams: action.payload,
				loading: false,
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
		case teams.SET_CURRENT_TEAM:
			return {
				...state,
				currentTeam: action.payload,
			};
		case teams.FETCH_CURRENT_TEAM:
			return {
				...state,
				currentTeam: action.payload,
			};

		default:
			return state;
	}
};
