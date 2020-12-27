import axios from "axios";

export const login = user => {
    return dispatch => {
        axios.post("http://localhost:7000/users/login", user)
        .then(response => {
            console.log(response.data.userId)
            const token = response.data.token;
            localStorage.setItem("token", token);
        })
        .catch(error => console.log(error))
    }
}

export const signup = newUser => {
    return dispatch => {
        axios.post("http://localhost:7000/users/signup", newUser)
            .then(response => {
                const token = response.data.token;
                const userId = response.data.data.id;
                localStorage.setItem("token", token);
            })
            .catch(error => console.log(error));
    }
}