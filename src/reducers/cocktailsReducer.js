export const cocktailsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDING':
            return  [...state, action.payload]
        case 'CLEAR':
            return state = []
            default:
                return state
    }
}