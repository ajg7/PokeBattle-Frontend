/*
4c) Add Secure Routes and refactor routing in Frontend
4d) Add deleting your account
4e) Make a Settings Page
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
14) Make Filter Functionality in Pokemon List Page
    -A - Z
    -Z - A
    -Liked first, then the rest
    - By Type
    - Legendary
    - Ancient
    - Mythical
15) Add Like Pokemon Functionality
16) Add Error Handling (like the API folder)
17) Add Backend Tests
18) Add Frontend Tests
19) Research Styled Components Global Styled
20) Style Landing Page Footer
21) Style Signup and Login [both will have same styling]
22) Style Pokemon List
23) Style Main Menu
24) Style OnDeck 
25) Style Battle Page
26) Style Winner Page
27) Make a Classic Filter in Pokemon List
    27a) Switches between modern and classic sprites
28) Make shiny Overlay for Legendary, Mythical, and Ancient Pokemon
29) Responsive Design and Accessibility 
*/

import * as pokemon from "./pokemonActions";
import * as battle from "./battleActions";
import * as team from "./teamActions";
import * as pokemonInTeams from "./pokemonInTeamsActions";

export {
    pokemon,
    battle,
    team, 
    pokemonInTeams
}