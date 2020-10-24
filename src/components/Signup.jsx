import axios from "axios";
import React, { useState } from "react";


const Signup = props => {
    class FormValues {
        constructor(email, password, isAdmin){
            this.email = email;
            this.password = password;
            this.isAdmin = isAdmin
        }
    }
    
    const initialFormValues = new FormValues("", "", false);
    
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

    const addNewUser = async event => {
        event.preventDefault();
        const newUser = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
        await axios.post("", newUser).then(response => {
            setFormValues(initialFormValues)
            console.log(response)
        });
    }

    return(
        <div>
            <h1>Gotta Catch 'em</h1>
            <h3>My first major web app</h3>
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