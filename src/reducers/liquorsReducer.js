export const liquorsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LIQORS':
            return action.payload
            default:
                return state
    }
}