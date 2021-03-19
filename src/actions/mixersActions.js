export const fetchMixer = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/mixers')
        .then(resp => resp.json())
        .then(mixers => dispatch({ type: 'FETCH_MIXERS', payload: mixers}))
    }
}