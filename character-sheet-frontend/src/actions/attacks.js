import { ADD_ATTACK, DELETE_ATTACK } from '../actionTypes'

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