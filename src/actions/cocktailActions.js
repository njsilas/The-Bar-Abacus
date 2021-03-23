export const storeIng = liquor => {
return dispatch => {
    dispatch({type: "ADDBOOZE", payload: liquor})
    }
}
