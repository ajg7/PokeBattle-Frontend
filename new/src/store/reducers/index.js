import { combineReducers } from "redux";
import { reducer as pokemon } from "./pokemonReducer";
import { reducer as teams } from "./teamsReducer";
import { reducer as teamMembers } from "./teamMembersReducer";
import { reducer as battle } from "./battleReducer";

export default combineReducers({
	pokemon,
	teams,
	teamMembers,
	battle,
});
