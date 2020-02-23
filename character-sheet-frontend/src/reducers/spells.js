import { ADD_SPELL, DELETE_SPELL } from '../actionTypes'


export function spellsReducer(state=[], action){
    switch(action.type){
        case ADD_SPELL:
            return [ ...state, action.payload ]
        case DELETE_SPELL:
            return state.filter(c => c.id !== action.payload.id)
        default:
            return state
    }
}