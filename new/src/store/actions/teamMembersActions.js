import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ADD_POKEMON_TO_A_TEAM = "ADD_POKEMON_TO_A_TEAM";
export const addPokemonToTeam = (pokemonId, teamId) => async dispatch => {
	const { data } = await axiosWithAuth().post(`/team_member/${pokemonId}`, { teamId });
	dispatch({ type: ADD_POKEMON_TO_A_TEAM, payload: data[0] });
};

export const DELETE_POKEMON_FROM_TEAM = "DELETE_POKEMON_FROM_TEAM";
export const deletePokemonFromTeam = (pokemonId, teamId) => async dispatch => {
	console.log("darkness");
	await axiosWithAuth().delete(`/team_members/removePokemon/${pokemonId}`, { teamId });
	const data = true;
	dispatch({ type: DELETE_POKEMON_FROM_TEAM, payload: data });
};
