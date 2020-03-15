import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Dungeons and Dragons virtual character sheets</h1>
                <p>A place where you can keep track of your characters without having to erase and rewrite EVERYTHING!</p>
                <Link to={`/characters`}>Click Here to See Characters</Link>
            </div>
        )
    }
}