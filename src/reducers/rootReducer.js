import { combineReducers } from 'redux'
import { mixersReducer } from './mixersReducer'
import { liquorsReducer } from './liquorsReducer'
import { cocktailsReducer } from './cocktailsReducer'

export const rootReducer = combineReducers({
    mixers: mixersReducer,
    liquors: liquorsReducer,
   cocktail: cocktailsReducer
})