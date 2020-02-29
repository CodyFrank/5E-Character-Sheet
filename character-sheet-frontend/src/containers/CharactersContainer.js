import React from 'react'
import CharacterCard from '../components/CharacterCard.js'
import { connect } from 'react-redux'

class CharactersContainer extends React.Component{

    renderCharacterCards = (characters) => {
        characters.map(c => <CharacterCard character={c} />)
    }

    render(){
        return(
            <div>
                {this.renderCharacterCards()}
            </div>
        )
    }
}

const mapStateToProps = ({ characters }) => ({
    characters
})

export default connect(mapStateToProps)(CharactersContainer)