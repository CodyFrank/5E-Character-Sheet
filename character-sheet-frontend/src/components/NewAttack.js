import React, { useState } from 'react'
import Form from '../Form'

export default function NewCharacterForm(){

    const [inputs, setInputs] = useState(
        {
            name: "",
            attack_bonus: "",
            damage: "",
            damage_type: ""
      }
    )


    const handleFormSubmit = array => {
        const newInputs = {
            ...inputs,
            name: "",
            attack_bonus: "",
            damage: "",
            damage_type: ""
            }
        
        setInputs(newInputs)
    }


        return(
            <div>
                <Form
                submitCallback={handleFormSubmit}
                inputs={[
                    'name',
                    'attack_bonus',
                    'damage',
                    'damage_type'
                ]}
                submitValue={"Create Attack"}
                />
            </div>
        )
}