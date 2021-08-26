export const fetchMixer = () => {
    return (dispatch) => {
        fetch('https://the-bar-abacus.herokuapp.com/mixers')
        .then(resp => resp.json())
        .then(mixers => {
            dispatch({ type: 'FETCH_MIXERS', payload: mixers})
        })
    }
}
export const addMixer = mixer => {
    return dispatch => {
        fetch('https://the-bar-abacus.herokuapp.com/mixers', {
        method: 'POST',
        body: JSON.stringify(mixer),
        headers: {'Content-Type': 'application/json' }
    })
    .then(resp => resp.json())
    .then(mixer => dispatch({ type: 'ADD_MIXER', payload: mixer}))
}}
