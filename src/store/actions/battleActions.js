import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { BattleManager } from "../../classes/BattleManager";

export const MAKE_CHALLENGER_TEAM = "MAKE_CHALLENGER_TEAM";
export const makeChallengerTeam = () => async dispatch => {
        const { data } = axiosWithAuth().get("/pokemon")
        const member1 = data[BattleManager.random()];
        const member2 = data[BattleManager.random()];
        const member3 = data[BattleManager.random()];
        const member4 = data[BattleManager.random()];
        const member5 = data[BattleManager.random()];
        const member6 = data[BattleManager.random()];
        const challengers = {data: [member1, member2, member3, member4, member5, member6]};
        try {
            localStorage.setItem("challengers", JSON.stringify(challengers));
            dispatch({ type: MAKE_CHALLENGER_TEAM, payload: challengers });
        }
        catch {
            throw new Error ();
        }
}

export const FETCH_CHALLENGER_TEAM = "FETCH_CHALLENGER_TEAM";
export const fetchChallengerTeam = () => async dispatch => {
    try {
        dispatch({ type: FETCH_CHALLENGER_TEAM });
    }
    catch {
        throw new Error();
    }
}

export const BATTLE = "BATTLE";
export const battle = outcome => async dispatch => {
    try {
        dispatch({ type: BATTLE, payload: {message: outcome.message, loser: outcome.loser }});
    }
    catch {
        throw new Error();
    }
}