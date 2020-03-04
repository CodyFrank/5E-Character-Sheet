import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions'
import { withRouter } from 'react-router-dom'
import CharacterStats from '../components/CharacterStats.js'
import Spell from '../components/Spell.js'
import Attack from '../components/Attack.js'

class CharacterContainer extends React.Component{
    constructor(props) {
        super(props)
        this.id = props.match.params.id
    }

    
    componentDidMount(){
        this.props.fetchCharacter(this.id)
    }

    renderCharacterStats = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const keys = Object.keys(character)
            return keys.map(k => <CharacterStats key={`${character.id}${k}`} statName={k} statValue={character[k]} /> )
        }
    }

    renderCharacterSpells = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const spells = character.spells
            return spells.map( s => <Spell key={`${character.id}${s.id}`} level={s.level} name={s.name} description={s.description}/>)
        }
    }

    renderCharacterAttacks = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const attacks = character.attacks
            console.log(attacks)
            return attacks.map( a => <Attack key={`${character.id}${a.id}`} name={a.name} attack_bonus={a.attack_bonus} damage={a.damage} damage_type={a.damage_type}/>)
        }
    }


    render(){
        return(
            <div className={'CharacterContainer'}>
                {this.renderCharacterStats()}
                {this.renderCharacterSpells()}
                {this.renderCharacterAttacks()}
                <p>maps and renders all spells/attacks/equipment for a character</p>
                <p>directs to a nested route for new attack/spell/equipment</p>
            </div>
        )
    }

}



const mapStateToProps = ({ characters }) => ({
    characters: characters
})

const connected = connect(mapStateToProps, { fetchCharacter })(CharacterContainer)
export default withRouter(connected)