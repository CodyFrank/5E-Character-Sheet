import React from 'react'

export default class CharacterStats extends React.Component{

    // renderStats = () => {
    //     const keys = Object.keys(this.props.character)
    //     return keys.map( k => <StatBlock key={`${this.props.character.id}${k}`} statName={k} statValue={this.props.character[k]}/>)
    // }

    render(){
        return(
            <div>
                <p>{`${this.props.statName}: ${this.props.statValue}`}</p>
            </div>
        )
    }
}