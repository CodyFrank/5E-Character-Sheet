import { ADD_EQUIPMENT, DELETE_EQUIPMENT } from '../actionTypes'

export function equipmentReducer(state=[], action){
    switch(action.type){
        case ADD_EQUIPMENT:
            return [ ...state, action.payload ]
        case DELETE_EQUIPMENT:
            return state.filter(e => e.id !== action.payload.id)
        default:
            return state
    }
}