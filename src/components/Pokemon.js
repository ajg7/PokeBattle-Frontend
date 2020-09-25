import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = props => {
    const { name, url } = props;
    const [type, setType] = useState("");
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                const data = response.data;
                setType(data.types[0].type.name)
            })
            .catch(error => {
                console.log(error);
            })
    })



    return(
        <div className="pokemon-card">
            <img src="" alt="" />
            <h2>{name}</h2>
            <h3>{type}</h3>
            <h3>Number</h3>
        </div>
    )
}

export default Pokemon;