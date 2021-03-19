export const liquorsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LIQORS':
            return action.payload
            case 'ADD_LIQ':
                return [...state, action.payload]
            default:
                return state
    }
}