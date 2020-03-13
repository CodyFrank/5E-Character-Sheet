import { ADD_SPELL, DELETE_SPELL, UPDATE_SPELL } from '../actionTypes'

export const addSpell = (data) => dispatch => {
    fetch('http://localhost:3000/api/v1/spells',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(spell => dispatch({ type: ADD_SPELL, payload: spell}))
}

export const deleteSpell = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/spells/${id}`,{
        method: 'DELETE', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(spell => dispatch({ type: DELETE_SPELL, payload: spell}))
}

export const updateSpell = (character) => dispatch => {
    fetch(`http://localhost:3000/api/v1/characters/${character.id}`,{
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(character)
    })
    .then(resp => resp.json()) 
    .then(c => dispatch({ type: UPDATE_SPELL, payload: c}))
}
