export const storeIng = ing => {
return dispatch => {
    dispatch({type: "ADDING", payload: ing})
    }
}
export const removeall = () => {
    return dispatch => {
        dispatch({type: "CLEAR"})
    }
}
