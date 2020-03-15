import { ADD_CHARACTER,
         DELETE_CHARACTER, 
         ADD_SPELL, 
         ADD_ATTACK, 
         ADD_EQUIPMENT, 
         DELETE_SPELL,
         DELETE_ATTACK,
         DELETE_EQUIPMENT,
         UPDATE_CHARACTER,
         ADD_CHARACTERS
         } from '../actionTypes'

export function charactersReducer(state=[], action){
    let newArray = []
    let index
    let character
    switch(action.type){
        case ADD_CHARACTERS:
            if(state.some(e => e.id === action.payload.id)){
                return state
            }else{
                newArray = [ ...state, action.payload ]
                return newArray.sort((a, b) => a.id - b.id)
            }
        case ADD_CHARACTER:
            return [action.payload]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.characterId )
        case ADD_SPELL:
            index = state.findIndex(e => e.id === action.payload.character_id)
            character = state[index]
            character.spells.push(action.payload)
            newArray.push(character)
            return newArray
        case ADD_ATTACK:
            index = state.findIndex(e => e.id === action.payload.character_id)
            character = state[index]
            character.attacks.push(action.payload)
            newArray.push(character)
            return newArray
        case ADD_EQUIPMENT:
            index = state.findIndex(e => e.id === action.payload.character_id)
            character = state[index]
            character.equipment.push(action.payload)
            newArray.push(character)
            return newArray
        case DELETE_SPELL:
            index = state.findIndex(e => e.id === action.payload.characterId)
            character = state[index]
            character.spells = character.spells.filter(s => s.id !== action.payload.spellId)
            newArray.push(character)
            return newArray
        case DELETE_ATTACK:
            index = state.findIndex(e => e.id === action.payload.characterId)
            character = state[index]
            character.attacks = character.attacks.filter(s => s.id !== action.payload.attackId)
            newArray.push(character)
            return newArray
        case DELETE_EQUIPMENT:
            index = state.findIndex(e => e.id === action.payload.characterId)
            character = state[index]
            character.equipment = character.equipment.filter(s => s.id !== action.payload.equipmentId)
            newArray.push(character)
            return newArray
        case UPDATE_CHARACTER:
            return [ action.payload ]
        default:
            return state
    }
}


