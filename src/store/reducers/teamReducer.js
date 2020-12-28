import { team } from "../actions";

const initialState = {
    teamId: 0,
    userId: 0,
    teamData: [],
    team: Array(6).fill(null),
    deletion: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case team.MAKE_TEAM:
            localStorage.setItem("teamId", action.payload.teamId)
            return {
                ...state,
                teamId: action.payload.teamId,
                userId: action.payload.userId
            }
        case team.FETCH_POKEMON_TEAM:
            return {
                ...state,
                teamData: action.payload
            }
        case team.SAVE_TEAM:
            localStorage.setItem("team", state.team)
            return {
                ...state,
                teamData: action.payload
            }
        case team.DELETE_TEAM:
            return {
                ...state,
                deletion: action.payload,
                team: Array(6).fill(null)
            }
        case team.FETCH_TEAM_ID:
            return {
                ...state,
                teamId: action.payload.teamId,
                userId: +action.payload.userId
            }
        default:
            return state
    }
}