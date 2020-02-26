import React, { useState } from 'react'
import Form from '../Form'

export default function NewCharacterForm(){

    const [inputs, setInputs] = useState(
        {
            level: "",
            name: "",
            description: ""
      }
    )


    const handleFormSubmit = array => {
        const newInputs = {
            ...inputs,
            level: "",
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
                    'level',
                    'name',
                    'description'  
                ]}
                submitValue={"Create Spell"}
                />
            </div>
        )
}