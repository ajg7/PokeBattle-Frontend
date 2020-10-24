import React, { useState } from "react";
import axios from "axios";
import { FormValues, initialFormValues } from "./classes/FormValuesClass";

const Login = props => {

    /*
        1. Make Form Values (make a separate file for class, so I can import into Login Component)
        2. Essentially, login should be just like Signup, except token should be stored in localStorage
        3. Post login form values to the login endpoint
        4. Add yup form Validation or React Form Validation that Max talked about
    */

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

    const loginUser = event => {
        event.preventDefault();
        const user = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
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
            <h3>Login</h3>
            <form onSubmit={loginUser}>
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


export default Login;