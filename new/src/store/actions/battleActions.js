import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const MAKE_A_BATTLE = "MAKE_A_BATTLE";
export const makeABattle = (userId, teamId, playerScore, challengerScore) => async dispatch => {
	const { data } = await axiosWithAuth().post("/battle/", {
		userId,
		teamId,
		playerScore,
		challengerScore,
	});
	dispatch({ type: MAKE_A_BATTLE, payload: data[0] });
};

export const UPDATE_SCORES = "UPDATE_SCORES";
export const updateScores = scores => async dispatch => {
	dispatch({ type: UPDATE_SCORES, payload: scores });
};
