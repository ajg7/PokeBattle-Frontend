export const DRAGGED_POKEMON = "DRAGGED_POKEMON";
export const setSelectedPokemon = selectedPokemon => dispatch => {
    try {
        dispatch({ type: DRAGGED_POKEMON, payload: selectedPokemon});
    }
    catch {
        throw new Error();
    }
}

export const ADD_POKEMON = "ADD_POKEMON";
export const addPokemon = (pokemon, index) => dispatch => {
    try {
        dispatch({ type: ADD_POKEMON, payload: {pokemon: pokemon, index: index }});
    }
    catch {
        throw new Error();
    }
}

export const SWAP_POKEMON = "SWAP_POKEMON";
export const swapPokemon = (prevPokemon, pokemon, prevIndex, nextIndex) => dispatch => {
    const i1 = +prevIndex;
    const i2 = +nextIndex;
    try {
        dispatch({type: SWAP_POKEMON, payload: {prevPokemon: prevPokemon, newPokemon: pokemon, prevIndex: i1, nextIndex: i2}});
    }
    catch{
        throw new Error();
    }
}

export const UPDATE_CURR_INDEX = "UPDATE_CURR_INDEX";
export const updateCurrIndex = index => dispatch => {
    try {
        dispatch({type: UPDATE_CURR_INDEX, payload: index});
    }
    catch {
        throw new Error();
    }
}

export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const removePokemon = index => dispatch => {
    try {
        dispatch({type: REMOVE_POKEMON, payload: index});
    }
    catch {
        throw new Error();
    }
}

export const IS_ADDING = "IS_ADDING";
export const setIsAdding = (bool1, bool2) => dispatch => {
    try {
        dispatch({type: IS_ADDING, payload: {add: bool1, swap: bool2}});
    }
    catch {
        throw new Error();
    }
}

export const IS_SWAPPING = "IS_SWAPPING";
export const setIsSwapping = () => dispatch => {
    try {
        dispatch({type: IS_ADDING, payload: true});
    }
    catch {
        throw new Error();
    }
}

export const IS_REMOVING = "IS_REMOVING";
export const setIsRemoving = () => dispatch => {
    try {
        dispatch({type: IS_ADDING, payload: true});
    }
    catch{
        throw new Error();
    }
}