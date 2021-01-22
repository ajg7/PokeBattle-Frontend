import axios from "axios";

export const signUp = async user => {
	const data = await axios.post("http://localhost:7000/users/signup", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId);
};

export const login = async user => {
	const data = await axios.post("http://localhost:7000/users/login", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId);
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userId");
	window.location.reload();
};
