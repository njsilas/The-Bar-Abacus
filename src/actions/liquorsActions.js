export const fetchLiquor = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/liquors')
        .then(resp => resp.json())
        .then(liquors => dispatch({ type: 'FETCH_LIQOURS', payload: liquors}))
    }
}