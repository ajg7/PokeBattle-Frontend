import axios from "axios";

export const login = user => {
    axios.post("http://localhost:7000/user/login", user)
        .then(response => {
            console.log(response.data)
            const token = response.data.token;
            const userId = response.data.userId;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
        })
        .catch(error => console.log(error))
}

export const signup = newUser => {
    axios.post("http://localhost:7000/user/signup", newUser)
        .then(response => {
            console.log(response.data)
            const token = response.data.token;
            const userId = response.data.userId;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
        })
        .catch(error => console.log(error));
}

export const deleteAccount = userId => {
    axios.delete(`http://localhost:7000/auth/user/${userId}`)
        .then(response => {
            console.log(response)
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
        })
        .catch(error => {
            console.log(error);
        })
}