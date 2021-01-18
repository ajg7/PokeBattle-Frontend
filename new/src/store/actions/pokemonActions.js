import axios from "axios";

export const FETCH_FEATURED_POKEMON = "FETCH_FEATURED_POKEMON";
export const fetchFeaturedPokemon = () => async dispatch => {
	const { data } = await axios("http://localhost:7000/pokemon");
	const randomNumber = Math.round(Math.random() * (151 - 1) + 1);
	const { modern_imgURL } = data[randomNumber];
	dispatch({ type: FETCH_FEATURED_POKEMON, payload: modern_imgURL });
};
