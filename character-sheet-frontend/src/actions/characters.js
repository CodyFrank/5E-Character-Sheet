import { DELETE_CHARACTER, ADD_CHARACTER, UPDATE_CHARACTER, ADD_CHARACTERS } from '../actionTypes'

export const fetchCharacters = () => dispatch => {
    fetch('http://localhost:3000/api/v1/characters')
    .then(resp => resp.json())
    .then(characters => characters.map( c => dispatch({ type: ADD_CHARACTERS, payload: c})))
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

export const updateCharacter = (character) => dispatch => {
    console.log("updating")
    fetch(`http://localhost:3000/api/v1/characters/${character.id}`,{
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(character)
    })
    .then(resp => resp.json()) 
    .then(c => dispatch({ type: UPDATE_CHARACTER, payload: c}))
}
