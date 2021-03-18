export const mixersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MIXERS':
            return action.payload
            default:
                return state
    }
}