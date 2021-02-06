import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: "https://pokebattle-backend.herokuapp.com/",
		headers: {
			Authorization: localStorage.getItem("token"),
		},
	});
};
