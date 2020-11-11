import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://pokemon-server-ajg7.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    });
};