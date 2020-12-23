import React, { useState, useRef } from "react";
import { FormValues } from "../../classes/FormValuesClass";
// import PropTypes from "prop-types";
// import { FormValues, initialFormValues } from "../../classes/FormValuesClass";
import { Button } from "../common";



const Form = props => {

    const emailRef = useRef();
    const passwordRef = useRef();

    /*
        1. Make Form Values (make a separate file for class, so I can import into Login Component)
        2. Essentially, login should be just like Signup, except token should be stored in localStorage
        3. Post login form values to the login endpoint
        4. Add yup form Validation or React Form Validation that Max talked about
    */
    
    // const { classType, headerText, submitCallback } = props;
    // const [formValues, setFormValues] = useState(initialFormValues);
    // const [disabled, setDisabled] = useState(true);
    // const emailRef = useRef();
    // const passwordRef = useRef();

    // const inputChange = (key, value) => {
    //     setFormValues({
    //         ...formValues,
    //         [key]: value
    //     })
    // }

    // const changeHandler = event => {
    //     const { name, value } = event.target
    //     inputChange(name, value)
    // }

    // const loginUser = event => {
    //     event.preventDefault();
    //     const user = new FormValues(formValues.email.trim(), formValues.password.trim(), false);
    //     axios.post("http://localhost:7000/users/login", user)
    //             .then(response => {
    //                 console.log(response)
    //                 const token = response.data.token;
    //                 const userId = response.data.userId;
    //                 localStorage.setItem("token", token);
    //                 fetchTeamId(userId);
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //             .finally(() => {
    //                 setFormValues(initialFormValues)
    //                 history.push("/pokemon_list")
    //             })
// }       
    
    const submitHandler = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = new FormValues(email, password, false);
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
                <button>Submit</button>
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

export default Form;


/*
1) Review how Login and SignUp work
2) Set up actions for both logging in and signing up
3) Make form component in only jsx for now
4) See what needs to be in the form component and what needs to
    be in the page components
    - inputChange and ChangeHandler should be in the form component
5) 








*/