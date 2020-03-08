import React from 'react'
import { addEquipment } from '../actions'
import { connect } from 'react-redux'

class NewEquipment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            description: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        let formData = { name: this.state.name, description: this.state.description, character_id: this.props.characterId }
        this.setState({
          name: "",
          description: ""
      })
        this.props.addEquipment(formData)
      }

      handleDescriptionChange = e => {
        this.setState({
          description: e.target.value
        })
      }

      handleNameChange = e => {
        this.setState({
          name: e.target.value
        })
      }
  



    render(){
        return(
            <div>
               <form onSubmit={e => this.handleSubmit(e)}>
                   <input type="text" placeholder="Name" onChange={e => this.handleNameChange(e)} name="name" value={this.state.name} />
                   <textarea placeholder="Description" onChange={e => this.handleDescriptionChange(e)} name="description" value={this.state.description} />
                   <input type="submit" value="Create Equipment"/>
               </form>
            </div>
        )
     }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addEquipment: (data) => dispatch(addEquipment(data))
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NewEquipment)