import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/reset.css";
import "../css/styles.css";

const Pokemon = props => {
    const { name, url } = props;
    const [type, setType] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState(0);
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                const data = response.data;
                const sprites = response.data.sprites.versions
                setType(data.types[0].type.name)
                setImg(sprites["generation-i"]["red-blue"].front_default)
                setId(data.id)
            })
            .catch(error => {
                console.log(error);
            })
    }, [url])



    return(
            <div className="pokemon-card">
                <div className="image-container">
                    <img src={img} alt={name} />
                </div>
                <div className="pokemon-data-container">
                    {name === "mr-mime" ? <h2>Mr. Mime</h2> : <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>}
                    <h3>{id}</h3>
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                </div>
            </div>
    )
}



export default Pokemon;