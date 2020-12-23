import React, { useState, useRef } from "react";
import { FormValues } from "../../classes/FormValuesClass";
// import PropTypes from "prop-types";
// import { FormValues, initialFormValues } from "../../classes/FormValuesClass";
import { Button } from "../common";
import { connect } from "react-redux";
import { login } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";


const Form = props => {

    const { login, formType } = props;
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    /*
        1. Make Form Values (make a separate file for class, so I can import into Login Component)
        2. Essentially, login should be just like Signup, except token should be stored in localStorage
        3. Post login form values to the login endpoint
        4. Add yup form Validation or React Form Validation that Max talked about
    */
    
    const submitHandler = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = new FormValues(email.trim(), password.trim(), false);
        console.log(user);
        if (formType === "Login") {
            login(user)
            history.push("/pokemon_list");
        };
        // if (formType === "Signup") {
        //     signup(newUser)
        //     history.push("/pokemon_list")
        // }

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                Email:
                    <input 
                    placeholder="Enter Email"
                    type="text"
                    ref={emailRef}
                    />
                </label>
                <label>
                Password:
                    <input 
                    placeholder="Enter Password"
                    type="password"
                    ref={passwordRef}
                    />
                </label>
                <Button 
                isDisabled={false}
                classType="submit-button"
                buttonText={"Submit"}
                />
            </form>









            {/*<h2 className={classType || null}> {headerText} </h2>
            <form onSubmit={submitCallback}>
                <label>
                Email:
                    <input 
                    placeholder="Enter Email"
                    type="text"
                    ref={emailRef}
                    />
                </label>
                <label>
                Password:
                    <input 
                    placeholder="Enter Password"
                    type="password"
                    ref={passwordRef}
                    />
                </label>
                <Button 
                isDisabled={disabled}
                classType={"submit-button"}
                buttonText={"Enter"}
                />
    </form>*/}
        </div>
    )
}

export default connect(null, { login })(Form);


/*
1) Review how Login and SignUp work
2) Set up actions for both logging in and signing up
3) Make form component in only jsx for now
4) See what needs to be in the form component and what needs to
    be in the page components
    - inputChange and ChangeHandler should be in the form component
5) 








*/