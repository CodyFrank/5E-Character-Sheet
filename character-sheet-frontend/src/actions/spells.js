import { ADD_SPELL, DELETE_SPELL, UPDATE_CHARACTER } from '../actionTypes'

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

export const updateSpell = (spell) => dispatch => {
    fetch(`http://localhost:3000/api/v1/spells/${spell.id}`,{
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(spell)
    })
    .then(resp => resp.json()) 
    .then(s => dispatch({ type: UPDATE_CHARACTER, payload: s.character}))
}
