import { battle } from "../actions";

const initialState = {
    challengerTeamData: [],
    outcome: "",
    teamData: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case battle.MAKE_CHALLENGER_TEAM:
            return {
                ...state,
                challengerTeamData: action.payload.data
            }
        case battle.FETCH_CHALLENGER_TEAM: 
            const challengers = localStorage.getItem("challengers")
            const challengerList = JSON.parse(challengers);
            return {
                ...state,
                challengerTeamData: challengerList.data
            }
        case battle.BATTLE:
            const newTeam = state.teamData.filter(member => member.name !== action.payload.loser)
            const newChallengerTeam = state.challengerTeamData.filter(member => member.name !== action.payload.loser)
            return {
                ...state,
                outcome: action.payload.message,
                teamData: newTeam,
                challengerTeamData: newChallengerTeam
            }
        default:
            return state
    }
}