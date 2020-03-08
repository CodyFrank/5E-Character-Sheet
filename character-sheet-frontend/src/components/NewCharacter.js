import React, { useState } from 'react'
import { addCharacter } from '../actions'
import { connect } from 'react-redux'

class NewCharacter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            level: "",
            character_class: ""
        }
    }

    handleLevelChange = e => {
        this.setState({
          level: e.target.value
        })
      }

      handleNameChange = e => {
        this.setState({
          name: e.target.value
        })
      }

      handleCharacterClassChange = e => {
        this.setState({
          name: e.target.value
        })
      }

      handleSubmit = e => {
        e.preventDefault()
        let formData = { level: parseInt(this.state.level), name: this.state.name, character_class: this.state.character_class }
        this.setState({
          level: "",
          name: "",
          character_class: ""
      })
        this.props.addCharacter(formData)
      }

      render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" placeholder="Level" onChange={e => this.handleLevelChange(e)} name="level" value={this.state.level} />
                    <input type="text" placeholder="Name" onChange={e => this.handleNameChange(e)} name="name" value={this.state.name} />
                    <input type="text" placeholder="Class" onChange={e => this.handleCharacterClassChange(e)} name="character_class" value={this.state.character_class} />
                    <input type="submit" value="Create Character"/>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        addCharacter: (data) => dispatch(addCharacter(data))
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacter)