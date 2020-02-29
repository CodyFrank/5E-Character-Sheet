import { ADD_CHARACTER, DELETE_CHARACTER, REQUESTING_CHARACTER_CHANGE } from '../actionTypes'

export function charactersReducer(state=[], action){
    switch(action.type){
        // case REQUESTING_CHARACTER_CHANGE:
        //     return {
        //         ...state, 
        //         characters: [...state.characters],
        //         requesting: true
        //     }
        case ADD_CHARACTER:
            return [ ...state, action.payload ]
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(c => c.id !== action.payload.id),
                requesting: false
            }
        default:
            return state
    }
}