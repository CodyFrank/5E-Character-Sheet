import { ADD_CHARACTER,
         DELETE_CHARACTER, 
         ADD_SPELL, 
         ADD_ATTACK, 
         ADD_EQUIPMENT, 
         DELETE_SPELL,
         DELETE_ATTACK,
         DELETE_EQUIPMENT,
         UPDATE_CHARACTER
         } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.characterId )
        case ADD_SPELL:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.character_id)
            var character = state[index]
            character.spells.push(action.payload)
            newArray.push(character)
            return newArray
        case ADD_ATTACK:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.character_id)
            var character = state[index]
            character.attacks.push(action.payload)
            newArray.push(character)
            return newArray
        case ADD_EQUIPMENT:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.character_id)
            var character = state[index]
            character.equipment.push(action.payload)
            newArray.push(character)
            return newArray
        case DELETE_SPELL:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.characterId)
            var character = state[index]
            character.spells = character.spells.filter(s => s.id !== action.payload.spellId)
            newArray.push(character)
            return newArray
        case DELETE_ATTACK:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.characterId)
            var character = state[index]
            character.attacks = character.attacks.filter(s => s.id !== action.payload.attackId)
            newArray.push(character)
            return newArray
        case DELETE_EQUIPMENT:
            var newArray = []
            var index = state.findIndex(e => e.id === action.payload.characterId)
            var character = state[index]
            character.equipment = character.equipment.filter(s => s.id !== action.payload.equipmentId)
            newArray.push(character)
            return newArray
        case UPDATE_CHARACTER:
            return [ action.payload ]
        default:
            return state
    }
}


