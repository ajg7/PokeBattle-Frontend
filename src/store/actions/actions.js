
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_POKEMON = "FETCH_POKEMON_SUCCESS";
export const ERROR_HANDLING = "ERROR_HANDLING";
export const MAKE_TEAM = "MAKE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const DRAGGED_POKEMON = "DRAGGED_POKEMON";

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

export const fetchSelectedPokemon = selectedPokemon => {
    return dispatch => {
        console.log(selectedPokemon)
        dispatch({ type: DRAGGED_POKEMON, payload: selectedPokemon})
    }
}





// import axios from "axios";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// export const FETCH_POKEMON_LIST = "FETCH_POKEMON_LIST";
// export const FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_SUCCESS_LIST";
// export const FETCH_POKEMON_LIST_ERROR = "FETCH_POKEMON_ERROR_LIST";
// export const MAKE_POKEMON_TEAM = "MAKE_POKEMON_TEAM";

// export const fetchPokemonList = props => dispatch => {
//     console.log(props)
//         dispatch({ type: FETCH_POKEMON_LIST }) 
//         axiosWithAuth().get("https://pokemon-server-ajg7.herokuapp.com/pokemon")
//             .then(response => {
//                 const data = response.data;
//                 dispatch({ type: FETCH_POKEMON_LIST_SUCCESS, payload: data })
//             })
//             .catch(error => {
//                 dispatch({ type: FETCH_POKEMON_LIST_ERROR, payload: { message: "You blacked out!" }})
//             })
// }

// export const pokemonTeamMaker = userId => dispatch => {



//         // console.log(pokemon)
//         // axios.post("https://pokemon-server-ajg7.herokuapp.com/pokemon", newPokemonDataObject)
//         //     .then(response => {
//         //         console.log(response.config);
//         //         dispatch({ type: MAKE_POKEMON_TEAM, payload: {name: pokemon, data: pokemonDataObject }})
//         //     })
//         //     .catch(error => {
//         //         console.log(error)
//         //     })
// }
