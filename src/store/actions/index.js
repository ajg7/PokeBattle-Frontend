/*
1) Divide up actions
2) Divide up reducers
3) Make an index js for the store
4) Refactor the Backend
5) If not already made, make a route that can get the teams associated with a user, post a new team, and delete a team
6) Map over team data in the main menu component
7) Add functionality to make a new team and delete a new team
8) Add functionality to select a team and take it to the OnDeck Page
9) Add functionality that allows you to simply go to the Pokemon List, so that you can "like" pokemon
10) When you make a team, you should be able to edit the team
    -Team needs to be rendered in the Drop Bar
11) When you make a team, you can add a nickname (Happens in the OnDeck Page)
12) Refactor Evaluator to make it O(n)
13) Make a Winner Page that displays your team, and updates win/losses table
14) Make Search Functionality in Pokemon List Page
    -A - Z
    -Z - A
    -Liked first, then the rest
    - By Type
    - Legendary
    - Ancient
    - Mythical
15) Add Error Handling (like the API folder)
16) Research Styled Components Global Styled
17) Style Landing Page Footer
18) Style Signup and Login [both will have same styling]
19) Style Pokemon List
20) Style Main Menu
21) Style OnDeck 
22) Style Battle Page
23) Style Winner Page
24) Make shiny Overlay for Legendary, Mythical, and Ancient Pokemon
*/

import * as pokemon from "./pokemonActions";
import * as battle from "./battleActions";
import * as team from "./teamActions";

export {
    pokemon,
    battle,
    team
}

export {
    ERROR_HANDLING,
    FETCH_POKEMON_TEAM,
    DRAGGED_POKEMON,
    ADD_POKEMON,
    SWAP_POKEMON,
    UPDATE_CURR_INDEX,
    REMOVE_POKEMON,
    IS_ADDING,
    IS_SWAPPING,
    IS_REMOVING,
    FETCH_TEAM_ID,
} from "./actions";
