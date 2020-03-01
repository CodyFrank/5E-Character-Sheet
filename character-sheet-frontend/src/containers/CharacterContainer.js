import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions'
import { useParams } from 'react-router-dom'

function CharacterContainer(props){


    useEffect(() =>{
        props.fetchCharacter(id)
    })

    let { id } = useParams()

    return(
        <div className={CharacterContainer}>
            <h1>{id}</h1>
            <p>renders characters stats component</p>
            <p>maps and renders all spells/attacks/equipment for a character</p>
            <p>directs to a nested route for new attack/spell/equipment</p>
        </div>
    )

}



const mapStateToProps = ({ character }) => ({
    character
})

export default connect(mapStateToProps, { fetchCharacter })(CharacterContainer)