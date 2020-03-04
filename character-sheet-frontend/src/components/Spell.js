import React from 'react'

export default class Spell extends React.Component{
    render(){
        return(
            <div>
                <p>name: {this.props.name}</p>
                <p>level: {this.props.level}</p>
                <p>description: {this.props.description}</p>
            </div>
        )
    }
}