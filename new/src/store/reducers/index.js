import { combineReducers } from "redux";
import { reducer as pokemon } from "./pokemonReducer";

export default combineReducers({
	pokemon,
});
