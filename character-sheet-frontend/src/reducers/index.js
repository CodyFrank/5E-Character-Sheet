import { charactersReducer } from './characters'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer

