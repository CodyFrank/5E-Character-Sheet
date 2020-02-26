import React from 'react'

export default class CharacterContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>render a single character info here</h1>
                <p>renders characters stats component</p>
                <p>maps and renders all spells/attacks/equipment for a character</p>
                <p>directs to a nested route for new attack/spell/equipment</p>
            </div>
        )
    }
}