import { ADD_SPELL } from '../actionTypes'

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