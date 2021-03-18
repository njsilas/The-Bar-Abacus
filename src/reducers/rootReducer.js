import { combinedReducers } from 'redux'
import { mixersReducer } from './mixersReducer'
import { liquorsReducer } from './liquorsReducer'

export const rootReducer = combinedReducers({
    mixers: mixersReducer,
    liquors: liquorsReducer
})