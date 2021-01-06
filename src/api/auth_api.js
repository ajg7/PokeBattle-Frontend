import axios from "axios";

export const login = user => {
    axios.post("http://localhost:7000/login", user)
    .then(response => {
        console.log(response.data)
        const token = response.data.token;
        localStorage.setItem("token", token);
    })
    .catch(error => console.log(error))
}

export const signup = newUser => {
    axios.post("http://localhost:7000/signup", newUser)
        .then(response => {
            console.log(response.data)
            const token = response.data.token;
            localStorage.setItem("token", token);
        })
        .catch(error => console.log(error));
}