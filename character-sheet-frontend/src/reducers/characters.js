import { ADD_CHARACTER, DELETE_CHARACTER, ADD_SPELL } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.characterId )
        case ADD_SPELL:
            let character = state.find(e => e.id === action.payload.character_id)
            return [...state, character.spells.push(action.payload)]
        default:
            return state
    }
}
