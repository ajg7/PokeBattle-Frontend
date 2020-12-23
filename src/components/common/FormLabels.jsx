import React, { useState } from "react";
import { FormValues, initialFormValues } from "../../classes/FormValuesClass";


const FormLabels = props => {

    const { labelText, nameText, inputType } = props;
    const [formValues, setFormValues] = useState(initialFormValues);

    const inputChange = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: value
        })
    }

    const changeHandler = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return (
        <>
        <label> {labelText}
            <input 
            name={nameText}
            type={inputType}
            value={formValues.value}
            onChange={changeHandler}
            />
        </label>
        </>
    )
}

export default FormLabels;