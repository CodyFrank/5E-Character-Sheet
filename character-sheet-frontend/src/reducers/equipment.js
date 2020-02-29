import { ADD_EQUIPMENT, DELETE_EQUIPMENT, REQUESTING_EQUIPMENT_CHANGE } from '../actionTypes'

export function equipmentReducer(state={ equipment: [], requesting: false }, action){
    switch(action.type){
        case REQUESTING_EQUIPMENT_CHANGE:
            return {
                ...state,
                equipment: [...state.equpiment],
                requesting: true
            }
        case ADD_EQUIPMENT:
            return {
                ...state,
                equpiment: [ ...state.equipment, action.payload ],
                requesting: false
            }
        case DELETE_EQUIPMENT:
            return {
                ...state,
                equipment: state.equipment.filter(e => e.id !== action.payload.id),
                requesting: false
            }
        default:
            return state
    }
}