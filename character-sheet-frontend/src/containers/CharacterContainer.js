import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions'

class CharacterContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCharacter()
    }

    render(){
        return(
            <div className={CharacterContainer}>
                <h1>render a single character info here</h1>
                <p>renders characters stats component</p>
                <p>maps and renders all spells/attacks/equipment for a character</p>
                <p>directs to a nested route for new attack/spell/equipment</p>
            </div>
        )
    }

}
const mapStateToProps = ({ character }) => ({
    character
})

export default connect(mapStateToProps, { fetchCharacter })(CharacterContainer)