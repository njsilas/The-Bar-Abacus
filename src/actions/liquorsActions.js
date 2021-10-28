export const fetchLiquor = () => {
    return (dispatch) => {
        
        fetch('https://the-bar-abacus.herokuapp.com/liquors')
        .then(resp => resp.json())
        .then(liquors => {
            
            dispatch({ type: 'FETCH_LIQUORS', payload: liquors})
        })
    }
}
export const addLiq = liquor => {
    return dispatch => {
        fetch('https://the-bar-abacus.herokuapp.com/liquors', {
            method: 'POST',
            body: JSON.stringify(liquor),
            headers: {'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(liquor => dispatch({ type: 'ADD_LIQ', payload: liquor}))
    }

}
export const removeLiq = (liquor) => {
    return dispatch => {
        fetch('https://the-bar-abacus.herokuapp.com/liquors/' + liquor.id, {
        method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(liquors => {
            
            dispatch({ type: 'FETCH_LIQUORS', payload: liquors})
        })
  }
}



