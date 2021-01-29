import { combineReducers } from "redux";
import { reducer as pokemon } from "./pokemonReducer";
import { reducer as teams } from "./teamsReducer";
import { reducer as teamMembers } from "./teamMembersReducer";
import { reducer as battle } from "./battleReducer";
import { reducer as whosThatPokemon } from "./whosThatPokemonReducer";

export default combineReducers({
	pokemon,
	teams,
	teamMembers,
	battle,
	whosThatPokemon,
});
