import axios from "axios";
import React, { useState } from "react";
import { fetchTeamId, makeTeam } from "../../store/actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormValues, initialFormValues } from "../../classes/FormValuesClass";
import { Button } from "../common";


const Signup = props => {
    const { makeTeam } = props; 
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
        axios.post("http://localhost:7000/users/signup", newUser)
            .then(response => {
                setFormValues(initialFormValues);
                const token = response.data.token;
                localStorage.setItem("token", token);
                makeTeam();
                history.push("/pokemon_list");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div>
            <h3>Sign Up</h3>
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
                <Button 
                isDisabled={false}
                classType={"submit-button"}
                buttonText={"Submit"}
                />
            </form>
        </div>
    )
}

export default connect(null, {makeTeam})(Signup);