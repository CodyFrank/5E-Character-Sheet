import React from 'react'
import { addSpell } from '../actions'
import { connect } from 'react-redux'


class NewSpell extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        level: "",
        name: "",
        description: ""
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

    handleDescriptionChange = e => {
        this.setState({
          description: e.target.value
        })
      }

      handleSubmit = e => {
        e.preventDefault()
        let formData = { level: parseInt(this.state.level), name: this.state.name, description: this.state.description, character_id: this.props.characterId }
        this.setState({
          level: "",
          name: "",
          description: ""
      })
        this.props.addSpell(formData)
      }
  

    render(){
        return(
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" placeholder="Level" onChange={e => this.handleLevelChange(e)} name="level" value={this.state.level} />
                    <input type="text" placeholder="Name" onChange={e => this.handleNameChange(e)} name="name" value={this.state.name} />
                    <textarea placeholder="Description" onChange={e => this.handleDescriptionChange(e)} name="description" value={this.state.description} />
                    <input type="submit" value="Create Spell"/>
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

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NewSpell)