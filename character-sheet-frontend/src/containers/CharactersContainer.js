import React from 'react'
import CharacterCard from '../components/CharacterCard.js'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions'

class CharactersContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCharacters()
    }

    renderCharacterCards = () => {
        console.log(this.props.characters)
        // this.props.characters.characters.map(c => <CharacterCard character={c} />)
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

export default connect(mapStateToProps, { fetchCharacters })(CharactersContainer)