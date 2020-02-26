import React, { useState } from 'react'
import Form from '../Form'

export default function NewCharacterForm(){

    const [inputs, setInputs] = useState(
        {
            name: "",
            description: ""
      }
    )


    const handleFormSubmit = array => {
        const newInputs = {
            ...inputs,
            name: "",
            description: ""
            }
        
        setInputs(newInputs)
    }


        return(
            <div>
                <Form
                submitCallback={handleFormSubmit}
                inputs={[
                    "name",
                    "description"
                ]}
                submitValue={"Create Equipment"}
                />
            </div>
        )
}