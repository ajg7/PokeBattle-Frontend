
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_POKEMON = "FETCH_POKEMON_SUCCESS";
export const ERROR_HANDLING = "ERROR_HANDLING";
export const MAKE_TEAM = "MAKE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const SAVE_TEAM = "SAVE_TEAM";
export const DRAGGED_POKEMON = "DRAGGED_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";
export const SWAP_POKEMON = "SWAP_POKEMON";
export const UPDATE_CURR_INDEX = "UPDATE_CURR_INDEX";
export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const IS_ADDING = "IS_ADDING";
export const IS_SWAPPING = "IS_SWAPPING";
export const IS_REMOVING = "IS_REMOVING";

export const fetchPokemon = () => {
    return dispatch => {
        axiosWithAuth().get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
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
        axiosWithAuth().post("https://pokemon-server-ajg7.herokuapp.com/team")
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
        axiosWithAuth().delete(`https://pokemon-server-ajg7.herokuapp.com/team/${id}`)
            .then(response => {
                console.log(response)
                dispatch({ type: DELETE_TEAM, payload: "has been deleted"})
            })
            .catch(error => {
                dispatch({ type: ERROR_HANDLING, payload: { message: "You blacked out!" }})
            })
    }
}

export const saveTeam = () => {
    return dispatch => {
        console.log("darkness")
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