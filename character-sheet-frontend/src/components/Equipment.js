import React from 'react'

export default class Equipment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            description: this.props.description,
            clicked: false
        }
    }

    renderData = () => {
        if (this.state.clicked) {
          return <div>
            <label>Name: </label>
            <input onChange={this.handleNameChange} value={this.state.name}/>
            <label>Description: </label>
            <textarea onChange={this.handleDescriptionChange} value={this.state.description || ""}/>
            <button onClick={this.handleSave}>Save Equipment</button>
          </div>
        }else{
           return <div onClick={e => this.makeEditable()} >
               <p>name: {this.props.name}</p>
               <p>description: {this.props.description || ""}</p>
            </div>
        }
      }

      handleSave = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name,
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