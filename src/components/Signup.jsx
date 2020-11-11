import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormValues, initialFormValues } from "./classes/FormValuesClass"


const Signup = props => {
    
    const history = useHistory();
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

    const addNewUser = event => {
        event.preventDefault();
        const newUser = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
        axios.post("https://pokemon-server-ajg7.herokuapp.com/users/signup", newUser)
            .then(response => {
                setFormValues(initialFormValues)
                history.push("/pokemon_list")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div>
            <h1>Gotta Catch 'em All</h1>
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