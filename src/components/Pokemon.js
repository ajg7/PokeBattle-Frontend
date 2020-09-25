import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/reset.css";
import "../css/styles.css";
import { PokemonCardStyledComponent } from "../styled_components/PokemonCardStyledComponent";

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
                setId(data.id)
            })
            .catch(error => {
                console.log(error);
            })
    })



    return(
        <PokemonCardStyledComponent>
            <div className="pokemon-cards">
                <div className="pokemon-card">
                    {id <= 151 ? <img src={img} alt={name} /> : null}
                    {id <= 151 ? <h2>{name}</h2> : null}
                    {id <= 151 ? <h3>{id}</h3> : null}
                    {id <= 151 ? <h3>{type}</h3> : null}
                </div>
            </div>
        </PokemonCardStyledComponent>
    )
}

export default Pokemon;