import React from 'react'

export default class CharactersContainer extends React.Component{

    renderCharacters = (characters) => {
        characters.map(c => <CharacterCard character={c} />)
    }

    render(){
        return(
            <div>
                {renderCharacters()}
            </div>
        )
    }
}