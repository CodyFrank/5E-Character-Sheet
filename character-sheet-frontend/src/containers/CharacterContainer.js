import React from 'react'
import { connect } from 'react-redux'
import { 
    fetchCharacter,
     deleteCharacter,
     deleteSpell,
     deleteAttack,
     deleteEquipment,
     updateCharacter,
     updateSpell, 
     updateAttack, 
     updateEquipment
 } from '../actions'
import { withRouter, Link } from 'react-router-dom'
import CharacterStats from '../components/CharacterStats.js'
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
            return keys.map(k => <CharacterStats key={`${character.id}${k}`} updateCallback={this.updateCharacter} statName={k} statValue={character[k]} /> )
        }
    }

    renderCharacterSpells = () => {
        if(this.props.characters.length > 0){
            const character = this.props.characters[0]
            const spells = character.spells
            if(spells){
                return spells.map( s => {
                    return <div key={`${character.id}${s.id}`}>
                      <Spell key={`${s.id}`} id={s.id} level={s.level} name={s.name} description={s.description} updateCallback={this.updateSpell}/>
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
                        <Attack key={`${a.id}`} id={a.id} name={a.name} attack_bonus={a.attack_bonus} damage={a.damage} damage_type={a.damage_type} updateCallback={this.updateAttack}/>
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
                      <Equipment key={`${character.id}${e.id}`} id={e.id} name={e.name} description={e.description} updateCallback={this.updateEquipment}/>
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

    updateCharacter = (data) => {
        let character = this.props.characters[0]
        const statName = data.statName
        character[statName] = data[statName]
        this.props.updateCharacter(character)
    }

    updateSpell = (data) => {
        let character = this.props.characters[0]
        let spell = character.spells.find(s => s.id === data.id)
        Object.assign(spell, data)
        this.props.updateSpell(spell)
    }

    updateAttack = (data) => {
        let character = this.props.characters[0]
        let attack = character.attacks.find(a => a.id === data.id)
        Object.assign(attack, data)
        this.props.updateAttack(attack)
    }

    updateEquipment = (data) => {
        let character = this.props.characters[0]
        let equipment = character.equipment.find(e => e.id === data.id)
        Object.assign(equipment, data)
        this.props.updateEquipment(equipment)
    }


   

    render(){
        return(
                <div className={'CharacterContainer'}>
                    <Link to="/characters">All Characters</Link>
                    {this.renderCharacterStats()}
                    {this.renderCharacterSpells()}
                    <NewSpell characterId={this.id} />
                    {this.renderCharacterAttacks()}
                    <NewAttack characterId={this.id} />
                    {this.renderCharacterEquipment()}
                    <NewEquipment characterId={this.id} />
                    <button onClick={(e) => this.deleteCharacter(e)}>Delete Character</button>
                    
                </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchCharacter: (id) => dispatch(fetchCharacter(id)),
        deleteCharacter: (id) => dispatch(deleteCharacter(id)),
        deleteSpell: (id) => dispatch(deleteSpell(id)),
        deleteAttack: (id) => dispatch(deleteAttack(id)),
        deleteEquipment: (id) => dispatch(deleteEquipment(id)),
        updateCharacter: (character) => dispatch(updateCharacter(character)),
        updateSpell: (spell) => dispatch(updateSpell(spell)),
        updateAttack: (attack) => dispatch(updateAttack(attack)),
        updateEquipment: (equipment) => dispatch(updateEquipment(equipment)),
     }
}

const mapStateToProps = (state) => ({
    characters: state.characters
})

const connected = connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)
export default withRouter(connected)