import React from 'react'

export default class CharacterCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>{`${this.props.character.name}`}</h1>
                <h3>{`${this.props.character.character_class}`}{`${this.props.character.level}`}</h3>
            </div>
        )
    }
}