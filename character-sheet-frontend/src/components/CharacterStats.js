import React from 'react'

export default class CharacterStats extends React.Component{

    renderStats = () => {
        let output = ""
        for (let [key, value] of Object.entries(this.props.character)) {
            output += <div>{`${key}: ${value}`}</div>
        }
    }

    render(){
        return(
            <>
                {this.renderStats()}
            </>
        )
    }
}