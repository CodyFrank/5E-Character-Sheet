import { ADD_CHARACTER, DELETE_CHARACTER, ADD_SPELL, ADD_ATTACK, ADD_EQUIPMENT } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.characterId )
        case ADD_SPELL:
            let scharacter = state.find(e => e.id === action.payload.character_id)
            return [...state, scharacter.spells.push(action.payload)]
        case ADD_ATTACK:
            let acharacter = state.find(e => e.id === action.payload.character_id)
            return [...state, acharacter.attacks.push(action.payload)]
        case ADD_EQUIPMENT:
            let echaracter = state.find(e => e.id === action.payload.character_id)
            return [...state, echaracter.equipment.push(action.payload)]
        default:
            return state
    }
}
