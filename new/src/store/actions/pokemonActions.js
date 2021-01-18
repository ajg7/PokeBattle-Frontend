import axios from "axios";

export const FETCH_POKEMON_OF_THE_DAY = "FETCH_POKEMON_OF_THE_DAY";
export const fetchPokemonOfTheDay = () => async dispatch => {
	const { data } = await axios("http://localhost:7000/pokemon");
	const date = new Date();
	const day = date.getDate();
	const { modern_imgURL } = data[day];
	dispatch({ type: FETCH_POKEMON_OF_THE_DAY, payload: modern_imgURL });
};
