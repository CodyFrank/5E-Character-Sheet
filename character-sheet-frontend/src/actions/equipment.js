import { ADD_EQUIPMENT } from '../actionTypes'

export const addEquipment = (data) => dispatch => {
    fetch('http://localhost:3000/api/v1/equipment',{
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(equipment => dispatch({ type: ADD_EQUIPMENT, payload: equipment}))
}