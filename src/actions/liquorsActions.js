export const fetchLiquor = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/liquors')
        .then(resp => resp.json())
        .then(liquors => dispatch({ type: 'FETCH_LIQOURS', payload: liquors}))
    }
}
export const addLiq = liquor => {
    return dispatch => {
        fetch('http://localhost:3000/liquors', {
            method: 'POST',
            body: JSON.stringify(liquor),
            headers: {'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(liquor => dispatch({ type: 'ADD_LIQ', payload: liquor}))
    }
     
}