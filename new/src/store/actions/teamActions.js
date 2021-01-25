import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const IS_LOADING_TEAMS = "IS_LOADING_TEAMS";
export const isLoadingTeams = () => async dispatch => {
	dispatch({ type: IS_LOADING_TEAMS });
};

export const FETCH_TEAM_NAMES = "FETCH_TEAM_NAMES";
export const fetchTeamNames = userId => async dispatch => {
	const { data } = await axiosWithAuth().get(`/teams/user/${userId}`);
	dispatch({ type: FETCH_TEAM_NAMES, payload: data });
};

export const FETCH_TEAM_BY_ID = "FETCH_TEAM_BY_ID";
export const fetchTeamById = teamId => async dispatch => {
	const { data } = await axiosWithAuth().get(`/team/${teamId}`);
	dispatch({ type: FETCH_TEAM_BY_ID, payload: { teamId, teamName: data } });
};

export const MAKE_NEW_TEAM = "MAKE_NEW_TEAM";
export const makeNewTeam = newTeam => async dispatch => {
	const { data } = await axiosWithAuth().post("/team/", newTeam);
	const pokemon = await axiosWithAuth().get(`/team_members/data/${newTeam.userId}`);
	dispatch({ type: MAKE_NEW_TEAM, payload: { data: data[0], pokemon: pokemon.data } });
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
		const userId = localStorage.getItem("userId");
		await axiosWithAuth().delete(`/team/${teamId}`);
		const pokemon = await axiosWithAuth().get(`/team_members/data/${userId}`);
		dispatch({ type: DELETE_TEAM, payload: pokemon.data });
	}
};

export const SET_CURRENT_TEAM = "SET_CURRENT_TEAM";
export const setCurrentTeam = currentTeam => dispatch => {
	dispatch({ type: SET_CURRENT_TEAM, payload: currentTeam });
};

export const FETCH_CURRENT_TEAM = "FETCH_CURRENT_TEAM";
export const fetchCurrentTeam = currentTeamId => async dispatch => {
	const { data } = await axiosWithAuth().get(`/team_member/getPokemon/${currentTeamId}`);
	dispatch({ type: FETCH_CURRENT_TEAM, payload: data });
};
