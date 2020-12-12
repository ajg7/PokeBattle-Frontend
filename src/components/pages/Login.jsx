import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FormValues, initialFormValues } from "../../classes/FormValuesClass";
import { Button } from "../common";

const Login = props => {

    /*
        1. Make Form Values (make a separate file for class, so I can import into Login Component)
        2. Essentially, login should be just like Signup, except token should be stored in localStorage
        3. Post login form values to the login endpoint
        4. Add yup form Validation or React Form Validation that Max talked about
    */

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

    const loginUser = event => {
        event.preventDefault();
        const user = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
        // https://pokemon-server-ajg7.herokuapp.com/users/login
        axios.post("http://localhost:7000/users/login", user)
                .then(response => {
                    console.log(response)
                    const token = response.data.token;
                    localStorage.setItem("token", token)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setFormValues(initialFormValues)
                    history.push("/pokemon_list")
                })
    }  

    return(
        <div>
            <h1>Gotta Catch 'em All</h1>
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
                <Button 
                isDisabled={false}
                classType={"submit-button"}
                buttonText={"Submit"}
                />
            </form>
        </div>
    )
}


export default Login;