import { ADD_CHARACTER, DELETE_CHARACTER, REQUESTING_CHARACTER_CHANGE } from '../actionTypes'

export const fetchCharacters = () => dispatch => {
    dispatch({ type: REQUESTING_CHARACTER_CHANGE })
    fetch('http://localhost:3000/api/v1/characters')
    .then(resp => resp.json())
    .then(characters => dispatch({ type: ADD_CHARACTER, payload: characters}))
}