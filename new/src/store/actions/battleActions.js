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

export const GET_BATTLE_DATA = "GET_BATTLE_DATA";
export const getBattleData = teamId => async dispatch => {
	const { data } = await axiosWithAuth().get(`battle/battles/${teamId}`);
	console.log(data);
	const wins = data.filter(battle => battle.player_score > battle.challenger_score);
	const losses = data.filter(battle => battle.player_score < battle.challenger_score);
	const ties = data.filter(battle => battle.player_score === battle.challenger_score);
	console.log(wins, losses, ties);
	const battleData = { wins, losses, ties };
	dispatch({ type: GET_BATTLE_DATA, payload: battleData });
};
