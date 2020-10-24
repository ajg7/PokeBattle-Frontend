import axios from "axios";
import React, { useState } from "react";
import { FormValues, initialFormValues } from "./classes/FormValuesClass"


const Signup = props => {
    
    const [formValues, setFormValues] = useState(initialFormValues);

    const inputChange = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: value
        })
    }

    const changeHandler = event => {
        const { name, value } = event.target
        console.log(name, value)
        inputChange(name, value)
    }

    const addNewUser = event => {
        event.preventDefault();
        const newUser = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
        axios.post("", user)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("Token", token)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    return(
        <div>
            <h1>Gotta Catch 'em</h1>
            <h3>Signup</h3>
            <form onSubmit={addNewUser}>
                <label> email: 
                    <input 
                    name="email"
                    type="text"
                    value={formValues.email}
                    onChange={changeHandler}
                    />
                </label>
                <label> password: 
                    <input 
                    name="password"
                    type="password"
                    value={formValues.password}
                    onChange={changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;