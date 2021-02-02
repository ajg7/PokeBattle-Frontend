import axios from "axios";

export const signUp = async user => {
	const data = await axios.post("http://localhost:7000/users/signup", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId);
	if (!localStorage.getItem("token")) throw new Error();
};

export const login = async user => {
	const data = await axios.post("http://localhost:7000/users/login", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId);
	if (!localStorage.getItem("token")) throw new Error();
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userId");
};