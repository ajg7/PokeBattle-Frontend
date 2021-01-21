import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TEAMS_OF_USER = "FETCH_TEAMS_OF_USER";
export const fetchTeams = userId => async dispatch => {
	console.log(userId);
	const { data } = await axiosWithAuth().get(`/team/user/${userId}`);
	dispatch({ type: FETCH_TEAMS_OF_USER, payload: data });
};

export const MAKE_NEW_TEAM = "MAKE_NEW_TEAM";
export const makeNewTeam = (userId, teamName) => async dispatch => {
	const newTeam = { userId, teamName };
	const { data } = await axiosWithAuth().post("/team/", newTeam);
	dispatch({ type: MAKE_NEW_TEAM, payload: data[0] });
};

export const FETCH_POKEMON_TEAM_MEMBERS = "FETCH_POKEMON_TEAM_MEMBERS";
export const fetchPokemonTeamMembers = userId => async dispatch => {
	const { data } = await axiosWithAuth().get(`/team_members/data/${userId}`);
	const teams = new Map();
	data.map(datum => teams.set(datum[0], datum[1]));
	dispatch({ type: FETCH_POKEMON_TEAM_MEMBERS, payload: teams });
};
