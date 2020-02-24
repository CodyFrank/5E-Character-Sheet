import React, { useState } from 'react'
import Form from '../Form'

export default function NewCharacterForm(){

    const [inputs, setInputs] = useState(
        {
        input1: "",
        input2: ""
      }
    )


    const handleFormSubmit = array => {
        const newInputs = {
            ...inputs,
                input1: `${array[0]}`,
                input2: `${array[1]}`
            }
        
        setInputs(newInputs)
    }


        return(
            <div>
                <Form
                submitCallback={handleFormSubmit}
                inputs={["input1", "input2"]}
                submitValue={"Create Character"}
                />
                <h1>{console.log(inputs)}</h1>
            </div>
        )
}