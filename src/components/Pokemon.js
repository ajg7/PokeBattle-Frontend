import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../css/reset.css";
import "../css/styles.css";
import { PokemonCardStyledComponent } from "../styled_components/PokemonCardStyledComponent";
import { fetchPokemonList } from "../store/actions"

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
        <PokemonCardStyledComponent>
            {id <= 151 ? <div className="pokemon-card">
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <h3>{id}</h3>
                <h3>{type}</h3>
            </div> : null}
        </PokemonCardStyledComponent>
    )
}



export default connect(null, { fetchPokemonList })(Pokemon);