import React from 'react'

export default class Attack extends React.Component{
    render(){
        return(
            <div>
                <p>name: {this.props.name}</p>
                <p>attack bonus: {this.props.attack_bonus}</p>
                <p>damage: {this.props.damage}</p>
                <p>damage type: {this.props.damage_type}</p>
            </div>
        )
    }
}