import { ADD_EQUIPMENT, DELETE_EQUIPMENT, UPDATE_CHARACTER } from '../actionTypes'

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

export const deleteEquipment = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/equipment/${id}`,{
        method: 'DELETE', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(equipment => dispatch({ type: DELETE_EQUIPMENT, payload: equipment}))
}

export const updateEquipment = (equipment) => dispatch => {
    fetch(`http://localhost:3000/api/v1/equipment/${equipment.id}`,{
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(equipment)
    })
    .then(resp => resp.json()) 
    .then(e => dispatch({ type: UPDATE_CHARACTER, payload: e.character}))
}