import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Button } from "../components/common";

describe("Auth Buttons can call their respective functions", () => {
	const onClick = jest.fn();
	const signup = jest.fn(() => {
		const userCredentials = { mockToken: "4nun4j3re231", mockUserId: 0 };
		return userCredentials;
	});
	const logout = jest.fn((user = { mockToken: "4nun4j3re231", mockUserId: 0 }) => (user = {}));

	test("Button can be clicked", () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<Button
					disabled={false}
					className={"test-button"}
					handleClick={onClick}
					buttonText={"Submit"}
				/>
			</ThemeProvider>
		);
		fireEvent.click(getByText("Submit"));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
	test("Signup/Login Button", async () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<Button disabled={false} handleClick={signup} buttonText={"Signup"} />
			</ThemeProvider>
		);
		fireEvent.click(getByText("Signup"));
		expect(signup).toHaveBeenCalledTimes(1);
		expect(signup).toHaveReturnedWith({ mockToken: "4nun4j3re231", mockUserId: 0 });
	});
	test("Logout", async () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<Button disabled={false} handleClick={logout} buttonText={"Logout"} />
			</ThemeProvider>
		);
		fireEvent.click(getByText("Logout"));
		expect(logout).toHaveBeenCalledTimes(1);
		expect(logout).toHaveReturnedWith({});
		expect(signup).not.toHaveReturnedWith({ mockToken: "4nun4j3re231" });
	});
});
