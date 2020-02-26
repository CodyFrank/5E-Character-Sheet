import React from 'react'
import CharacterCard from '../components/CharacterCard.js'

export default class CharactersContainer extends React.Component{

    renderCharacterCards = (characters) => {
        characters.map(c => <CharacterCard character={c} />)
    }

    render(){
        return(
            <div>
                {renderCharacterCards()}
            </div>
        )
    }
}