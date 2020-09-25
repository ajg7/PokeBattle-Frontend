import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = props => {
    const { name, url } = props;
    const [type, setType] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState(0);
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                const data = response.data;
                setType(data.types[0].type.name)
                const sprites = response.data.sprites.versions
                setImg(sprites["generation-i"]["red-blue"].front_default)
                console.log(data.id)
                setId(data.id)
            })
            .catch(error => {
                console.log(error);
            })
    })



    return(
        <div className="pokemon-card">
            {id <= 151 ? <img src={img} alt={name} /> : null}
            {id <= 151 ? <h2>{name}</h2> : null}
            {id <= 151 ? <h3>{type}</h3> : null}
        </div>
    )
}

export default Pokemon;