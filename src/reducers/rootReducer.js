import { combineReducers } from 'redux'
import { mixersReducer } from './mixersReducer'
import { liquorsReducer } from './liquorsReducer'

export const rootReducer = combineReducers({
    mixers: mixersReducer,
    liquors: liquorsReducer
})