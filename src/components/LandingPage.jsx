import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = props => {

    const history = useHistory();
    
    const signupHandler = event => {
        history.push("/signup")
    }

    const loginHandler = event => {
        history.push("/login")
    }

    return(
        <>
            <p>This will be the main page, where you can either signup or login to the app</p>
            <button onClick={signupHandler}>Sign Up</button>
            <button onClick={loginHandler}>Login</button>
        </>
    )
}

export default LandingPage;