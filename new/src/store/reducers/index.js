import { combineReducers } from "redux";
import { reducer as pokemon } from "./pokemonReducer";
import { reducer as teams } from "./teamsReducer";

export default combineReducers({
	pokemon,
	teams,
});
