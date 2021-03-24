export const storeIng = ing => {
return dispatch => {
    dispatch({type: "ADDING", payload: ing})
    }
}
