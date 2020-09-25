import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = props => {
    const { name, url } = props;
    const [type, setType] = useState("");
    const [img, setImg] = useState("");
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                const data = response.data;
                setType(data.types[0].type.name)
                const sprites = response.data.sprites.versions
                setImg(sprites["generation-i"]["red-blue"].front_default)
            })
            .catch(error => {
                console.log(error);
            })
    })



    return(
        <div className="pokemon-card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h3>{type}</h3>
        </div>
    )
}

export default Pokemon;