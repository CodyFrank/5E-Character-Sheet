import { FETCH_CHARACTER, DELETE_CHARACTER, ADD_CHARACTER } from '../actionTypes'

export const fetchCharacters = () => dispatch => {
    fetch('http://localhost:3000/api/v1/characters')
    .then(resp => resp.json())
    .then(characters => characters.map( c => dispatch({ type: ADD_CHARACTER, payload: c})))
}

export const fetchCharacter = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/characters/${id}`)
    .then(resp => resp.json())
    .then(character => dispatch({ type: ADD_CHARACTER, payload: character}))
}

export const deleteCharacter = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/characters/${id}`, {
        method: 'DELETE', 
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
    .then(characterId => dispatch({ type: DELETE_CHARACTER, payload: characterId }))
}

export const addCharacter = (data) => dispatch => {
    fetch('http://localhost:3000/api/v1/characters',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(c => dispatch({ type: ADD_CHARACTER, payload: c}))
}

