export const cocktailsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDING':
            return  [...state, action.payload]
            default:
                return state
    }
}