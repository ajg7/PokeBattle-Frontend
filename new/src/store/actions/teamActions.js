import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TEAM_NAMES = "FETCH_TEAM_NAMES";
export const fetchTeamNames = userId => async dispatch => {
	console.log(userId);
	const { data } = await axiosWithAuth().get(`/team/user/${userId}`);
	dispatch({ type: FETCH_TEAM_NAMES, payload: data });
};

export const MAKE_NEW_TEAM = "MAKE_NEW_TEAM";
export const makeNewTeam = newTeam => async dispatch => {
	const { data } = await axiosWithAuth().post("/team/", newTeam);
	dispatch({ type: MAKE_NEW_TEAM, payload: data[0] });
};

export const FETCH_POKEMON_TEAMS = "FETCH_POKEMON_TEAMS";
export const fetchPokemonTeams = userId => async dispatch => {
	const { data } = await axiosWithAuth().get(`/team_members/data/${userId}`);
	dispatch({ type: FETCH_POKEMON_TEAMS, payload: data });
};

export const DELETE_TEAM = "DELETE_TEAM";
export const deleteTeam = teamId => async dispatch => {
	const result = window.confirm("Are you sure you want to delete this team?");
	if (result) {
		await axiosWithAuth().delete(`/team/${teamId}`);
		dispatch({ type: DELETE_TEAM });
	}
};
