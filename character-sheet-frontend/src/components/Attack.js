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
            <label>Attack Bonus: </label>
            <input onChange={this.handleAttackBonusChange} value={this.state.attack_bonus}/>
            <label>Damage: </label>
            <input onChange={this.handleDamageChange} value={this.state.damage}/>
            <label>Damage Type: </label>
            <input onChange={this.handleDamageTypeChange} value={this.state.damage_type}/>
            <button onClick={this.handleSave}>Save Attack</button>
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

      makeEditable = (e) => {
        this.setState({
          clicked: true
        })
      }



    render(){
        return(
            <div>
                  {this.renderData()}
            </div>
        )
    }
}