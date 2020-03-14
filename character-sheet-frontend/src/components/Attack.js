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

    renderData = () => {
        if (this.state.clicked) {
          return <div>
            <label>Name: </label>
            <input onChange={this.handleNameChange} value={this.state.name}/>
            <label>Level: </label>
            <input onChange={this.handleLevelChange} value={this.state.level}/>
            <label>Description: </label>
            <textarea onChange={this.handleDescriptionChange} value={this.state.description}/>
            <button onClick={this.handleSave}>Save Spell</button>
          </div>
        }else{
            return <div onClick={e => this.makeEditable()}>
                <p>name: {this.props.name}</p>
                <p>attack bonus: {this.props.attack_bonus}</p>
                <p>damage: {this.props.damage}</p>
                <p>damage type: {this.props.damage_type}</p>
            </div>
        }
      }



    render(){
        return(
            <div>
                  {this.renderData()}
            </div>
        )
    }
}