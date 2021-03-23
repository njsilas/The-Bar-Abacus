export const cocktailsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDBOOZE':
            return  [...state, action.payload]
        case 'ADD_LIQ':
                return
            default:
                return state
    }
}