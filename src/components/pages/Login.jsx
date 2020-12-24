import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FormValues, initialFormValues } from "../../classes/FormValuesClass";
import { Button, AuthForm, FormLabels } from "../common";
import { connect } from "react-redux";
import { fetchTeamId } from "../../store/actions/actions";

const Login = props => {

    const { fetchTeamId, teamId } = props;
    /*
        1. Make Form Values (make a separate file for class, so I can import into Login Component)
        2. Essentially, login should be just like Signup, except token should be stored in localStorage
        3. Post login form values to the login endpoint
        4. Add yup form Validation or React Form Validation that Max talked about
    */

    const history = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);

    const loginUser = event => {
        event.preventDefault();
        const user = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
        axios.post("http://localhost:7000/users/login", user)
                .then(response => {
                    console.log(response)
                    const token = response.data.token;
                    const userId = response.data.userId;
                    localStorage.setItem("token", token);
                    fetchTeamId(userId);
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
            <AuthForm 
            formType="Login"
            />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        teamId: state.teamId
    }
}


export default connect(mapStateToProps, { fetchTeamId })(Login);