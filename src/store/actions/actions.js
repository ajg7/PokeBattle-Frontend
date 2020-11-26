
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { BattleManager } from "../../classes/BattleManager";

export const FETCH_POKEMON = "FETCH_POKEMON_SUCCESS";
export const ERROR_HANDLING = "ERROR_HANDLING";
export const MAKE_TEAM = "MAKE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const SAVE_TEAM = "SAVE_TEAM";
export const FETCH_POKEMON_TEAM = "FETCH_POKEMON_TEAM";
export const DRAGGED_POKEMON = "DRAGGED_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const SWAP_POKEMON = "SWAP_POKEMON";
export const UPDATE_CURR_INDEX = "UPDATE_CURR_INDEX";
export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const IS_ADDING = "IS_ADDING";
export const IS_SWAPPING = "IS_SWAPPING";
export const IS_REMOVING = "IS_REMOVING";
export const MAKE_OPPONENT_TEAM = "MAKE_OPPONENT_TEAM";
export const FETCH_OPPONENT_TEAM = "FETCH_OPPONENT_TEAM";
export const BATTLE = "BATTLE";

export const fetchPokemon = () => {
    return dispatch => {
        axiosWithAuth().get("/pokemon")
            .then(response => {
                const data = response.data;
                dispatch({ type: FETCH_POKEMON, payload: data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const makeTeam = () => {
    return dispatch => {
        axiosWithAuth().post("/team/")
            .then(response => {
                const teamId = response.data.data.team_Id;
                const userId = response.data.data.user_Id;
                dispatch({ type: MAKE_TEAM, payload: { teamId: teamId, userId: userId }})
            })
            .catch(error => {
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const deleteTeam = id => {
    return dispatch => {
        axiosWithAuth().delete(`/team/${id}`)
            .then(response => {
                console.log(response)
                dispatch({ type: DELETE_TEAM, payload: "has been deleted"})
            })
            .catch(error => {
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const saveTeam = team => {
    return dispatch => {
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

        Promise.all([post1, post2, post3, post4, post5, post6])
            .then(response => {
                const data = response.map(individualResponse => individualResponse.data)
                console.log("post", data)
                dispatch({type: SAVE_TEAM, payload: data})
            })
    }
}

export const fetchPokemonTeam = teamId => {
    return dispatch => {
        console.log(teamId)
        axiosWithAuth().get(`/pokemon_team/${teamId}`)
            .then(response => {
                dispatch({type: FETCH_POKEMON_TEAM, payload: response.data})
            })
            .catch(error => {
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const setSelectedPokemon = selectedPokemon => {
    return dispatch => {
        dispatch({ type: DRAGGED_POKEMON, payload: selectedPokemon})
    }
}

export const addPokemon = (pokemon, index) => {
    return dispatch => {
        dispatch({ type: ADD_POKEMON, payload: {pokemon: pokemon, index: index }})
    }
}

export const swapPokemon = (prevPokemon, pokemon, prevIndex, nextIndex) => {
    return dispatch => {
        const i1 = +prevIndex;
        const i2 = +nextIndex;
        dispatch({type: SWAP_POKEMON, payload: {prevPokemon: prevPokemon, newPokemon: pokemon, prevIndex: i1, nextIndex: i2}})
    }
}

export const updateCurrIndex = index => {
    return dispatch => {
        dispatch({type: UPDATE_CURR_INDEX, payload: index})
    }
}

export const removePokemon = index => {
    return dispatch => {
        dispatch({type: REMOVE_POKEMON, payload: index})
    }
}

export const setIsAdding = (bool1, bool2) => {
    return dispatch => {
        dispatch({type: IS_ADDING, payload: {add: bool1, swap: bool2}})
    }
}

export const setIsSwapping = () => {
    return dispatch => {
        console.log("hello")
        dispatch({type: IS_ADDING, payload: true})
    }
}

export const setIsRemoving = () => {
    return dispatch => {
        dispatch({type: IS_ADDING, payload: true})
    }
}

export const makeOpponentTeam = () => {
    return dispatch => {
        axiosWithAuth().get("/pokemon")
            .then(response => {
                const data = response.data;
                const member1 = data[BattleManager.random()]
                const member2 = data[BattleManager.random()]
                const member3 = data[BattleManager.random()]
                const member4 = data[BattleManager.random()]
                const member5 = data[BattleManager.random()]
                const member6 = data[BattleManager.random()]
                const opponents = {data: [member1, member2, member3, member4, member5, member6]};
                localStorage.setItem("opponents", JSON.stringify(opponents));
                dispatch({ type: MAKE_OPPONENT_TEAM, payload: opponents })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const fetchOpponentTeam = () => {
    return dispatch => {
        dispatch({ type: FETCH_OPPONENT_TEAM })
    }
}

export const battle = outcome => {
    return dispatch => {

        dispatch({ type: BATTLE, payload: {message: outcome.message, loser: outcome.loser }})
    }
}