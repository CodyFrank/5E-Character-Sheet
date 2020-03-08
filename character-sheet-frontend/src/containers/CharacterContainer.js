import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter, deleteCharacter } from '../actions'
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterStats from '../components/CharacterStats.js'
import CharactersContainer from './CharactersContainer'
import Spell from '../components/Spell.js'
import Attack from '../components/Attack.js'
import Equipment from '../components/Equipment.js'

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
            return attacks.map( a => <Attack key={`${character.id}${a.id}`} name={a.name} attack_bonus={a.attack_bonus} damage={a.damage} damage_type={a.damage_type}/>)
        }
    }

    renderCharacterEquipment = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const equipment = character.equipment
            return equipment.map( e => <Equipment key={`${character.id}${e.id}`} name={e.name} description={e.description}/>)
        }
    }

    deleteCharacter = (e) => {
        e.preventDefault()
        this.props.deleteCharacter(this.id)
        this.props.history.push("/characters")
    }


    render(){
        return(
            <Router>
                <div className={'CharacterContainer'}>
                    {this.renderCharacterStats()}
                    {this.renderCharacterSpells()}
                    {this.renderCharacterAttacks()}
                    {this.renderCharacterEquipment()}
                    <p>directs to a nested route for new attack/spell/equipment</p>
                    <button onClick={(e) => this.deleteCharacter(e)}>Delete Character</button>
                </div>


                <Switch>
                    <Route exact path="/characters">
                        <CharactersContainer/>
                    </Route>
                </Switch>
            </Router>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchCharacter: (id) => dispatch(fetchCharacter(id)),
        deleteCharacter: (id) => dispatch(deleteCharacter(id))
     }
}

const mapStateToProps = ({ characters }) => ({
    characters: characters
})

const connected = connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)
export default withRouter(connected)