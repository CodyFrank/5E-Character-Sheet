import React from 'react'


export default class AttackInfo extends React.Component{
    render(){
        return (
            <>
                <p>Name: {this.props.name || ""}</p>
                <p>Attack bonus: {this.props.attack_bonus || ""}</p>
                <p>Damage: {this.props.damage || ""}</p>
                <p>Damage type: {this.props.damage_type || ""}</p>
            </>
        )
    }
}