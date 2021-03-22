import { combineReducers } from 'redux'
import { mixersReducer } from './mixersReducer'
import { liquorsReducer } from './liquorsReducer'
import { cocktailReducer } from './cocktailReducer'

export const rootReducer = combineReducers({
    mixers: mixersReducer,
    liquors: liquorsReducer,
    cocktail: cocktailReducer
})