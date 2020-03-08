import { ADD_ATTACK } from '../actionTypes'

export const addAttack = (data) => dispatch => {
    fetch('http://localhost:3000/api/v1/spells',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(attack => dispatch({ type: ADD_ATTACK, payload: attack}))
}