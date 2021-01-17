import { combineReducers } from 'redux';

import { reducer as battle } from "./battleReducer";
import { reducer as team } from "./teamReducer";
import { reducer as teamMembers } from "./teamMembersReducer";
import { reducer as pokemon } from "./pokemonReducer";

export default combineReducers({
    battle,
    team,
    teamMembers,
    pokemon
});