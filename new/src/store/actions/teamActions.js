import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_TEAMS_OF_USER = "FETCH_TEAMS_OF_USER";
export const fetchTeams = userId => async dispatch => {
	console.log(userId);
	const { data } = await axiosWithAuth().get(`/team/user/${userId}`);
	dispatch({ type: FETCH_TEAMS_OF_USER, payload: data });
};
