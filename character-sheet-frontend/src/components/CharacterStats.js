import React from 'react'

export default class CharacterStats extends React.Component{

    renderStats(){
        switch(this.props.statName) {
            case "id": 
              return 
            case "attacks":
              return
            case "equipment":
              return
            case "spells":
              return
            default:
              return <p>{`${this.props.statName}: ${this.props.statValue}`}</p>
        }

    }


    render(){
        return(
            <div>
                {this.renderStats()}
            </div>
        )
    }
}