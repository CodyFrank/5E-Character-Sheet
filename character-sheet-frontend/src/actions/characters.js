import { ADD_CHARACTER, DELETE_CHARACTER } from '../actionTypes'

export const fetchCharacters = () => dispatch => {
    fetch('http://localhost:3000/api/v1/characters')
    .then(resp => resp.json())
    .then(characters => characters.map( c => dispatch({ type: ADD_CHARACTER, payload: c})))
}
