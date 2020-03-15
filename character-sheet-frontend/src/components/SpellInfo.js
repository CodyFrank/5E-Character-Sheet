import React from 'react'


export default class SpellInfo extends React.Component{
    render(){
        return (
            <>
                <p>Name: {this.props.name || ""}</p>
                <p>Level: {this.props.level || ""}</p>
                <p>Description: {this.props.description || ""}</p>
            </>
        )
    }
}