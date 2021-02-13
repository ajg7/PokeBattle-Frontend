import axios from "axios";

export const signUp = async user => {
	const data = await axios.post("https://pokebattle-backend.herokuapp.com/users/signup", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId.id);
	if (!localStorage.getItem("token")) throw new Error();
};

export const login = async user => {
	const data = await axios.post("https://pokebattle-backend.herokuapp.com/users/login", user);
	localStorage.setItem("token", data.data.token);
	localStorage.setItem("userId", data.data.userId);
	if (!localStorage.getItem("token")) throw new Error();
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userId");
};
