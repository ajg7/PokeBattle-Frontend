import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const MAKE_TEAM = "MAKE_TEAM";
export const makeTeam = () => dispatch => {
    axiosWithAuth().post("/team/")
        .then(response => {
            const teamId = response.data.data.team_Id;
            const userId = response.data.data.user_Id;
            dispatch({ type: MAKE_TEAM, payload: { teamId: teamId, userId: userId }})
        })
        .catch(error => {
            throw new Error();
        })
}
export const DELETE_TEAM = "DELETE_TEAM";
export const deleteTeam = id => dispatch => {
        axiosWithAuth().delete(`/team/${id}`)
        try {
            dispatch({ type: DELETE_TEAM, payload: "has been deleted"})
        }
        catch {
            throw new Error();
        }
            
}

export const SAVE_TEAM = "SAVE_TEAM";
export const saveTeam = team => async dispatch => {
        const ids = team.map(member => {
            if (member === null) {
                return null
            } else {
                return member.number
            }
        })
        let post1 = axiosWithAuth().post(`/pokemon_team/${ids[0]}`)
        let post2 = axiosWithAuth().post(`/pokemon_team/${ids[1]}`)
        let post3 = axiosWithAuth().post(`/pokemon_team/${ids[2]}`)
        let post4 = axiosWithAuth().post(`/pokemon_team/${ids[3]}`)
        let post5 = axiosWithAuth().post(`/pokemon_team/${ids[4]}`)
        let post6 = axiosWithAuth().post(`/pokemon_team/${ids[5]}`)

        const { response } = await Promise.all([post1, post2, post3, post4, post5, post6])
            const data = response.map(individualResponse => individualResponse.data)
            try {
                dispatch({type: SAVE_TEAM, payload: data})
            }
            catch {
                throw new Error();
            }
}
export const FETCH_POKEMON_TEAM = "FETCH_POKEMON_TEAM";
export const fetchPokemonTeam = teamId => async dispatch => {
    const { teamData } = await axiosWithAuth().get(`/pokemon_team/${teamId}`);
    try {
        dispatch({type: FETCH_POKEMON_TEAM, payload: teamData.data});
    }
    catch {
        throw new Error();
    }
}