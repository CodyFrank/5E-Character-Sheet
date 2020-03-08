import React from 'react'
import { addAttack } from '../actions'
import { connect } from 'react-redux'

class NewAttack extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                name: "",
                attack_bonus: "",
                damage: "",
                damage_type: ""
            }
    }    

      handleNameChange = e => {
        this.setState({
          name: e.target.value
        })
      }


  
      
      handleAttackBonusChange = e => {
        this.setState({
          attack_bonus: e.target.value
        })
      }

      handleDamageChange = e => {
        this.setState({
          damage: e.target.value
        })
      }

      handleDamageTypeChange = e => {
        this.setState({
          damage_type: e.target.value
        })
      }


      handleSubmit = e => {
        e.preventDefault()
        let formData = { 
            name: this.state.name,
            attack_bonus: this.state.attack_bonus,
            damage: this.state.damage,
            damage_type: this.state.damage_type, 
            character_id: this.props.characterId }
        this.props.addAttack(formData)
      }

      render(){
         return(
             <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" onChange={e => this.handleNameChange(e)} name="name" value={this.state.name} />
                    <input type="text" onChange={e => this.handleAttackBonusChange(e)} name="attack_bonus" value={this.state.attack_bonus} />
                    <input type="text" onChange={e => this.handleDamageChange(e)} name="damage" value={this.state.damage} />
                    <input type="text" onChange={e => this.handleDamageTypeChange(e)} name="damage_type" value={this.state.damage_type} />
                    <input type="submit"/>
                </form>
             </div>
         )
      }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addAttack: (data) => dispatch(addAttack(data))
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NewAttack)