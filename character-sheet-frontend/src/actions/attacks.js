import { ADD_ATTACK, DELETE_ATTACK, UPDATE_CHARACTER } from '../actionTypes'

export const addAttack = (data) => dispatch => {
    fetch('http://localhost:3000/api/v1/attacks',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(attack => dispatch({ type: ADD_ATTACK, payload: attack}))
}

export const deleteAttack = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/attacks/${id}`,{
        method: 'DELETE', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(attack => dispatch({ type: DELETE_ATTACK, payload: attack}))
}

export const updateAttack = (attack) => dispatch => {
    fetch(`http://localhost:3000/api/v1/attack/${attack.id}`,{
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(attack)
    })
    .then(resp => resp.json()) 
    .then(a => dispatch({ type: UPDATE_CHARACTER, payload: a.character}))
}