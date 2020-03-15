import React from 'react'


export default class EquipmentInfo extends React.Component{
    render(){
        return (
            <>
               <p>name: {this.props.name}</p>
               <p>description: {this.props.description || ""}</p>
            </>
        )
    }
}