import axios from "axios";

export const FETCH_FEATURED_POKEMON = "FETCH_FEATURED_POKEMON";
export const fetchFeaturedPokemon = () => async dispatch => {
	const { data } = await axios("http://localhost:7000/pokemon");
	const randomNumber = Math.round(Math.random() * 151);
	const { modern_imgURL, name, entry, shiny_imgURL } = data[randomNumber];
	dispatch({
		type: FETCH_FEATURED_POKEMON,
		payload: { modern_imgURL, name, entry, shiny_imgURL },
	});
};

export const FETCH_POKEMON = "FETCH_POKEMON";
export const fetchPokemon = () => async dispatch => {
	const { data } = await axios("http://localhost:7000/pokemon");
	dispatch({ type: FETCH_POKEMON, payload: data });
};

export const FIND_POKEMON = "FIND_POKEMON";
export const findPokemon = result => dispatch => {
	dispatch({ type: FIND_POKEMON, payload: result });
};

export const SEARCH_BY_TYPE = "SEARCH_BY_TYPE";
export const searchByType = type => async dispatch => {
	const { data } = await axios(`http://localhost:7000/pokemon/search/type?type=${type}`);
	dispatch({ type: SEARCH_BY_TYPE, payload: data });
};

export const ALPHABETIZE_POKEMON = "ALPHABETIZE_POKEMON";
export const alphabetizePokemon = alphabetOrdering => async dispatch => {
	const { data } = await axios(`http://localhost:7000/pokemon/${alphabetOrdering}`);
	dispatch({ type: ALPHABETIZE_POKEMON, payload: data });
};

export const OTHER_FILTERS = "OTHER_FILTERS";
export const searchFilters = (searchParam, value) => async dispatch => {
	const { data } = await axios(
		`http://localhost:7000/pokemon/${searchParam}?${searchParam}=${value}`
	);
	dispatch({ type: OTHER_FILTERS, payload: data });
};

export const MAKE_CHALLENGER_TEAM = "MAKE_CHALLENGER_TEAM";
export const makeChallengerTeam = challengerTeamName => dispatch => {
	dispatch({ type: MAKE_CHALLENGER_TEAM, payload: challengerTeamName });
};

export const HABITAT_FILTER = "HABITAT_FILTER";
export const habitatFilter = habitat => async dispatch => {
	const { data } = await axios.get(`http://localhost:7000/pokemon/habitat?habitat=${habitat}`);
	dispatch({ type: HABITAT_FILTER, payload: data });
};
