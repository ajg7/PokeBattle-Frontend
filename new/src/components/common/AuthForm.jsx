import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { signUp, login } from "../../api/auth";
import { authSchema } from "../../utils/formSchemas";
import { useHistory } from "react-router-dom";

const AuthForm = props => {
	const emailRef = useRef();
	const passwordRef = useRef();
    const { formType } = props;
    const [authErrors, setAuthErrors] = useState("");
    const history = useHistory();
    
	const submitHandler = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
        const user = { email: email.trim(), password: password.trim() };
		try {
            const valid = await authSchema.isValid(user);
            authSchema.validate(user).catch(error => setAuthErrors(error.errors));
			if (formType === "Login" && valid) login(user);
			if (formType === "Signup" && valid) signUp(user);
        } 
        finally {
            setAuthErrors("");
            emailRef.current.value = "";
            passwordRef.current.value = "";
            history.push("/loading");
        } 
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<label>
					Email:
					<input placeholder="Email" type="text" ref={emailRef} />
				</label>
				<label>
					Password:
					<input placeholder="Password" type="password" ref={passwordRef} />
                </label>
                <p>{authErrors}</p>
                <button>Submit</button>
			</form>
		</div>
	);
};

AuthForm.propTypes = {
	formType: PropTypes.string,
};

export default AuthForm;