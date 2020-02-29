import { ADD_SPELL, DELETE_SPELL, REQUESTING_SPELL_CHANGE } from '../actionTypes'


export function spellsReducer(state={ spells: [], requesting: false }, action){
    switch(action.type){
        case REQUESTING_SPELL_CHANGE:
            return {
                ...state,
                spells: [...state.spells],
                requesting: true
            }
        case ADD_SPELL:
            return {
                ...state,
                spells: [ ...state.spells, action.payload ],
                requesting: false
            }
        case DELETE_SPELL:
            return {
                ...state,
                spells: state.spells.filter(s => s.id !== action.payload.id),
                requesting: false
            }
        default:
            return state
    }
}