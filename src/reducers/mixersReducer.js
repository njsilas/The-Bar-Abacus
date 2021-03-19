export const mixersReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MIXERS':
            return action.payload
            case 'ADD_MIXER':
                return [...state, action.payload]
            default:
                return state
    }
}