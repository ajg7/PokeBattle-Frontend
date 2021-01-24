import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const MAKE_A_BATTLE = "MAKE_A_BATTLE";
export const makeABattle = (userId, teamId) => async dispatch => {
	const { data } = await axiosWithAuth().post("/battle/", { userId, teamId });
	dispatch({ type: MAKE_A_BATTLE, payload: data[0] });
};
