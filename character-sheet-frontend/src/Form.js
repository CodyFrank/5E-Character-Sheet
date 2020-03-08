import React, { useState } from 'react'


export default function Form(props) {

    const [inputs, setInputs] = useState(props.inputs.map(i => ""))

    const handleInputChange = (e, i) => {
        const nextInputs = [...inputs]
        nextInputs[i] = e.target.value
        setInputs(nextInputs)
    }



    const renderInputs = () => {
        return props.inputs.map((inputName, index) => (
            <input
              type="text"
              placeholder={inputName}
              key={inputName}
              onChange={e => handleInputChange(e, index)}
              value={inputs[index]}
            />
        ))
    }

    const handleSubmit = e => {
        e.preventDefault()
        setInputs(props.inputs.map(i => ""))
        props.submitCallback(inputs)
    }

    return (
        <form>
            {renderInputs()}
            <button onClick={handleSubmit}>{props.submitValue}</button>
        </form>
    )

}