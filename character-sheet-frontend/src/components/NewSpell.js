import React from 'react'
import { addSpell } from '../actions'
import { connect } from 'react-redux'


class NewSpell extends React.Component {
    state = {
        level: "",
        name: "",
        description: ""
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

    handleDescriptionChange = e => {
        this.setState({
          description: e.target.value
        })
      }

      handleSubmit = e => {
        e.preventDefault()
        let formData = { level: parseInt(this.state.level), name: this.state.name, description: this.state.description, character_id: this.props.characterId }
        this.props.addSpell(formData)
      }
  

    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" onChange={e => this.handleLevelChange(e)} name="level" value={this.state.level} />
                    <input type="text" onChange={e => this.handleNameChange(e)} name="name" value={this.state.name} />
                    <input type="text" onChange={e => this.handleDescriptionChange(e)} name="description" value={this.state.description} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addSpell: (data) => dispatch(addSpell(data))
    }
}

export default connect({}, mapDispatchToProps)(NewSpell)