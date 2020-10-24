import React from "react";
import axios from "axios";

const Login = props => {


    return(
        <div>
            <h1>Gotta Catch 'em</h1>
            <h3>Login</h3>
            <form>
                <label> email: 
                    <input 
                    name="email"
                    type="text"
                    />
                </label>
                <label> password: 
                    <input 
                    name="password"
                    type="password"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Login;