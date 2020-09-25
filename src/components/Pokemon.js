import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/reset.css";
import "../css/styles.css";
import { theme } from "../StyledComponents/theme";
import styled from "styled-components";




const StyledThemePill = styled.div`
    div {
        background-color: ${({ theme, type }) => {
            return theme.types[type];
        }};
        border-radius: 5px;
    }
`

const Pokemon = props => {
    const { name, url } = props;
    const [type, setType] = useState("");
    const [imgs, setImgs] = useState("");
    const [id, setId] = useState(0);
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                const data = response.data;
                const sprites = response.data.sprites.versions
                setType(data.types[0].type.name)
                setImgs(sprites["generation-i"]["red-blue"].front_default)
                setId(data.id)
            })
            .catch(error => {
                console.log(error);
            })
    }, [url])


    return(
            <div className="pokemon-card">
                <div className="image-container">
                    <img src={imgs} alt={name} />
                </div>
                <div className="pokemon-data-container">
                    <h3 className="id">#{id}</h3>
                    {name === "mr-mime" ? <h2 className="poke-name">Mr. Mime</h2> : <h2 className="poke-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>}
                    <StyledThemePill type={type}>
                        <div className="type-pill">
                            <h3 className={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                        </div>
                    </StyledThemePill>
                </div>
            </div>
    )
}



export default Pokemon;