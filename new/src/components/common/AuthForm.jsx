import React, { useRef } from "react";
import PropTypes from "prop-types";

const AuthForm = props => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { formType } = props;

	console.log(emailRef);

	const submitHandler = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
        const user = { email: email.trim(), password: password.trim() };
		try {
			if (formType === "Login") console.log(user, "login");
			if (formType === "Signup") console.log(user, "signup");
        } 
        catch (error) {
			console.log(error);
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
                <button>Submit</button>
			</form>
		</div>
	);
};

AuthForm.propTypes = {
	formType: PropTypes.string,
};

export default AuthForm;
