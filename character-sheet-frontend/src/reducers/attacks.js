import { ADD_ATTACK, DELETE_ATTACK } from '../actionTypes'


export function attacksReducer(state=[], action){
    switch(action.type){
        case ADD_ATTACK:
            return [ ...state.attacks, action.payload ]
        case DELETE_ATTACK:
            return state.filter(a => a.id !== action.payload.id)
        default:
            return state
    }
}