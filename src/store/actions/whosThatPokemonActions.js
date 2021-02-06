import axios from "axios";

export const GET_TOTAL_POINTS = "GET_TOTAL_POINTS";
export const getTotalPoints = id => async dispatch => {
	const { data } = await axios.get(`https://pokebattle-backend.herokuapp.com/users/points/${id}`);
	dispatch({ type: GET_TOTAL_POINTS, payload: data.total_points });
};

export const UPDATE_TOTAL_POINTS = "UPDATE_TOTAL_POINTS";
export const updateTotalPoints = (updatedPoints, id) => async dispatch => {
	await axios.put(`https://pokebattle-backend.herokuapp.com/users/points/${id}`, updatedPoints);
	dispatch({ type: UPDATE_TOTAL_POINTS });
};
