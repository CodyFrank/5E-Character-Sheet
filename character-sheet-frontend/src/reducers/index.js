import { attacksReducer } from './attacks'
import { charactersReducer } from './characters'
import { spellsReducer } from './spells'
import { equipmentReducer } from './equipment'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer

