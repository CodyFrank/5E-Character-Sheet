import React from 'react'
import CharacterCard from '../components/CharacterCard.js'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions'
import { Link } from 'react-router-dom'
import NewCharacter from '../components/NewCharacter'

class CharactersContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCharacters()
    }

    renderCharacterCards = () => {
        return this.props.characters.map(c => <Link key={c.id} to={`/characters/${c.id}`}><CharacterCard key={c.id} character={c} /></Link>)
    }

    createCharacter = (e) => {
        e.preventDefault()
        this.props.createCharacter()
    }

    render(){
        return(
            <div className={"CharactersContainer"}>
                {this.renderCharacterCards()}
                <NewCharacter />
            </div>
        )
    }
}

const mapStateToProps = ({ characters }) => ({
    characters
})

export default connect(mapStateToProps, { fetchCharacters })(CharactersContainer)