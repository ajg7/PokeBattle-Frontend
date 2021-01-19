import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { authSchema } from "../../utils/formSchemas";

const AuthForm = props => {
	const emailRef = useRef();
	const passwordRef = useRef();
    const { formType } = props;
    const [authErrors, setAuthErrors] = useState("");
    
	const submitHandler = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
        const user = { email: email.trim(), password: password.trim() };
		try {
            const valid = await authSchema.isValid(user);
            authSchema.validate(user).catch(error => setAuthErrors(error.errors));
			if (formType === "Login" && valid) console.log(user, "login");
			if (formType === "Signup" && valid) console.log(user, "signup");
        } 
        finally {
            setAuthErrors("");
            emailRef.current.value = "";
            passwordRef.current.value = "";
        } 
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<label>
					Email:
					<input placeholder="Enter Email" type="text" ref={emailRef} />
				</label>
				<label>
					Password:
					<input placeholder="Enter Password" type="password" ref={passwordRef} />
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