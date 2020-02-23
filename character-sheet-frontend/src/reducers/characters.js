import { ADD_CHARACTER, DELETE_CHARACTER } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return state.filter(c => c.id !== action.payload.id)
        default:
            return state
    }
}