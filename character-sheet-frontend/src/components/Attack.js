import React from 'react'

export default class Attack extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name, 
            attack_bonus: this.props.attack_bonus, 
            damage: this.props.damage, 
            damage_type: this.props.damage_type,
            clicked: false
        }
    }
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