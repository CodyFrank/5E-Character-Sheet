import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter, deleteCharacter, deleteSpell, deleteAttack, deleteEquipment } from '../actions'
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterStats from '../components/CharacterStats.js'
import CharactersContainer from './CharactersContainer'
import Spell from '../components/Spell.js'
import Attack from '../components/Attack.js'
import Equipment from '../components/Equipment.js'
import NewSpell from '../components/NewSpell'
import NewAttack from '../components/NewAttack'
import NewEquipment from '../components/NewEquipment'



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
            if(spells){
                return spells.map( s => {
                    return <div key={`${character.id}${s.id}`}>
                      <Spell key={`${s.id}`} level={s.level} name={s.name} description={s.description}/>
                      <button onClick={(e) => this.deleteSpell(e, s.id)}>Delete Spell</button>
                    </div>
                } 
                )
            }
        }
    }

    renderCharacterAttacks = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const attacks = character.attacks
            if(attacks){
                return attacks.map( a => {
                    return <div key={`${character.id}${a.id}`}>
                        <Attack key={`${a.id}`} name={a.name} attack_bonus={a.attack_bonus} damage={a.damage} damage_type={a.damage_type}/>
                        <button onClick={(e) => this.deleteAttack(e, a.id)}>Delete Attack</button>
                    </div>
                    }
                )
            }
        }
    }

    renderCharacterEquipment = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const equipment = character.equipment
            if(equipment){
                return equipment.map( e => {
                    return <div key={`${character.id}${e.id}`}>
                      <Equipment key={`${character.id}${e.id}`} name={e.name} description={e.description}/>
                      <button onClick={(event) => this.deleteEquipment(event, e.id)}>Delete Equipment</button>
                    </div>
                    }
                )
            }
        }
    }

    deleteCharacter = (e) => {
        e.preventDefault()
        this.props.deleteCharacter(this.id)
        this.props.history.push("/characters")
    }

    deleteSpell = (e, spellId) => {
        e.preventDefault()
        this.props.deleteSpell(spellId)
    }

    deleteAttack = (e, attackId) => {
        e.preventDefault()
        this.props.deleteAttack(attackId)
    }

    deleteEquipment = (e, eId) => {
        e.preventDefault()
        this.props.deleteEquipment(eId)
    }

   

    render(){
        return(
            <Router>
                <div className={'CharacterContainer'}>
                    {this.renderCharacterStats()}
                    {this.renderCharacterSpells()}
                    <NewSpell characterId={this.id} />
                    {this.renderCharacterAttacks()}
                    <NewAttack characterId={this.id} />
                    {this.renderCharacterEquipment()}
                    <NewEquipment characterId={this.id} />
                    <button onClick={(e) => this.deleteCharacter(e)}>Delete Character</button>
                    
                </div>


                <Switch>
                    <Route exact path="/characters">
                        <CharactersContainer />
                    </Route> 
                </Switch>
            </Router>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchCharacter: (id) => dispatch(fetchCharacter(id)),
        deleteCharacter: (id) => dispatch(deleteCharacter(id)),
        deleteSpell: (id) => dispatch(deleteSpell(id)),
        deleteAttack: (id) => dispatch(deleteAttack(id)),
        deleteEquipment: (id) => dispatch(deleteEquipment(id))
     }
}

const mapStateToProps = ({ characters }) => ({
    characters: characters
})

const connected = connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)
export default withRouter(connected)