import { ADD_CHARACTER, DELETE_CHARACTER, ADD_SPELL, ADD_ATTACK, ADD_EQUIPMENT, DELETE_SPELL } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.characterId )
        case ADD_SPELL:
            var character = state.find(e => e.id === action.payload.character_id)
            return [...state, character.spells.push(action.payload)]
        case ADD_ATTACK:
            var character = state.find(e => e.id === action.payload.character_id)
            return [...state, character.attacks.push(action.payload)]
        case ADD_EQUIPMENT:
            var character = state.find(e => e.id === action.payload.character_id)
            return [...state, character.equipment.push(action.payload)]
        case DELETE_SPELL:
            const newArray = []
            var index = state.findIndex(e => e.id === action.payload.characterId)
            var character = state[index]
            character.spells = character.spells.filter(s => s.id !== action.payload.spellId)
            newArray.push(character)
            return newArray
        default:
            return state
    }
}


