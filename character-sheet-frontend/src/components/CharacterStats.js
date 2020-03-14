import React from 'react'



class CharacterStats extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      statValue: this.props.statValue,
      clicked: false
    }
  }

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
              return <p onClick={e => this.makeEditable()}>{`${this.props.statName}: ${this.props.statValue}`}</p>
        }

    }

    renderData = () => {
      if (this.state.clicked) {
        return <div onBlur={this.handleBlur}>
          <label>{this.props.statName}</label>
          <input className={"statInput"} onBlur={this.handleBlur} onChange={this.handleStatChange} value={this.state.statValue}/>
        </div>
      }else{
        return this.renderStats()
      }
    }

    handleBlur = (e) => {
      const data = {}
      data.statName = this.props.statName
      const statName = this.props.statName
      data[statName] = this.state.statValue
      this.setState((state, props) => ({
        clicked: false
      }), this.props.updateCallback(data))
    }

    handleStatChange = (e) => {
      this.setState({
        statValue: e.target.value
      })
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


export default CharacterStats