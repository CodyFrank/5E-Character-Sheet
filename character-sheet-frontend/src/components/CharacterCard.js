import React from 'react'
import CharacterContainer from '../containers/CharacterContainer'


export default class CharacterCard extends React.Component{

    changePage = (e) => {
        e.preventDefault()
        this.props.history.push(`/characters/${this.props.character.id}`)
    }

    render(){
        return(
                <div className={"characterCard"}>
                    <h1>{`${this.props.character.name}`}</h1>
                    <h3> Level: {`${this.props.character.level}`} Class: {`${this.props.character.character_class}`}</h3>
                </div>
        )
    }
}
