import React from 'react'


export default class CharacterCard extends React.Component{


    render(){
        return(
                <div className={"characterCard"}>
                    <h1>{`${this.props.character.name}`}</h1>
                    <h3> Level: {`${this.props.character.level}`} Class: {`${this.props.character.character_class}`}</h3>
                </div>
        )
    }
}
