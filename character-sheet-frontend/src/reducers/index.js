import { attacksReducer } from './attacks'
import { charactersReducer } from './characters'
import { spellsReducer } from './spells'
import { equipmentReducer } from './equipment'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    attacks: attacksReducer,
    characters: charactersReducer,
    spells: spellsReducer,
    equipment: equipmentReducer
})

export default rootReducer

