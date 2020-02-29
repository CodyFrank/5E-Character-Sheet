import { ADD_ATTACK, DELETE_ATTACK, REQUESTING_ATTACK_CHANGE } from '../actionTypes'


export function attacksReducer(state={ attacks: [], requesting: false }, action){
    switch(action.type){
        case REQUESTING_ATTACK_CHANGE:
            return {
                ...state, 
                attacks: [...state.attacks],
                requesting: true
            }
        case ADD_ATTACK:
            return {
                ...state, 
                attacks: [ ...state.attacks, action.payload ],
                requesting: false
            }
        case DELETE_ATTACK:
            return {
                ...state, 
                attacks: state.attacks.filter(a => a.id !== action.payload.id),
                requesting: false
            }
        default:
            return state
    }
}