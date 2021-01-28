import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { AuthForm } from "../components/common";
// import { signUp, login, logout } from "../api/auth";

/*
Goals:
    [] Test that the buttons work
    -Make a button component
    [] Test that they call their respective functions
    [] Test that a token and user Id are either made in localStorage, or removed depending upon the function
*/

describe("Auth Buttons can call their respective functions", () => {
	const onClick = jest.fn();
	test("Sign Up Button", async () => {
		// const button = render(<Provider store={store}><AuthForm /></Provider>);
		// console.log(button);
	});
});
