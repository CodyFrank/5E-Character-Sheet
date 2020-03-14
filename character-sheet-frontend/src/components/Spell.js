import React from 'react'

export default class Spell extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name, 
            level: this.props.level, 
            description: this.props.description, 
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
           return <div onClick={e => this.makeEditable()} >
              <p>Name: {this.props.name}</p>
              <p>Level: {this.props.level}</p>
              <p>Description: {this.props.description}</p>
            </div>
        }
      }

      handleSave = (e) => {
          e.preventDefault()
          const data = {
              name: this.state.name,
              level: this.state.level,
              description: this.state.description, 
              id: this.props.id
          }
          this.setState((state, props) => ({
            clicked: false
          }), this.props.updateCallback(data))
      }

      makeEditable = (e) => {
        this.setState({
          clicked: true
        })
      }

      handleNameChange = (e) => {
        this.setState({
          name: e.target.value
        })
      }

      handleLevelChange = (e) => {
        this.setState({
          level: e.target.value
        })
      }

      handleDescriptionChange = (e) => {
        this.setState({
          description: e.target.value
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