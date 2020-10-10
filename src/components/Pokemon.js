import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pokemonTeamMaker } from "../store/actions";
import "../css/reset.css";
import "../css/styles.css";
import Pokeball from "../assets/Pokeball.png";
import Greatball from "../assets/Greatball.png";
import Ultraball from "../assets/Ultraball.png";
import Masterball from "../assets/Masterball.png";
import styled from "styled-components";




const StyledThemePill = styled.div`

    .type-pill-primary {
        background-color: ${({ theme, type }) => {
            return theme.types[type];
        }};
        border-radius: 5px;
    }
    .type-pill-secondary {
        background-color: ${({ theme, secondaryType }) => {
            return theme.types[secondaryType];
        }};
        border-radius: 5px;
    }

`

const Pokemon = props => {
    const { name, url, pokemonTeamMaker } = props;
    const [type, setType] = useState("");
    const [secondaryType, setSecondaryType] = useState("");
    const [imgs, setImgs] = useState("");
    const [id, setId] = useState(0);
    const [height, setHeight] = useState(0);
    const [heightInFeet, setHeightInFeet] = useState(0);
    const [weight, setWeight] = useState(0);
    const [abilities, setAbilities] = useState([]);
    const [entries, setEntries] = useState([]);
    const [chosenPokemon, setChosenPokemon] = useState(name);

    const imgArray = [Pokeball, Greatball, Ultraball, Masterball]
    const randNum = Math.round(Math.random() * (imgArray.length - 1));

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const data = response.data;
                const types = response.data.types;
                const sprites = response.data.sprites.versions
                // console.log(data)
                setType(types[0].type.name)
                setImgs(sprites["generation-i"]["red-blue"].front_default)
                setId(data.id)
                setHeight(Math.round((data.height * 3.93701)));
                setHeightInFeet(Math.round((data.height * 0.220462)));
                setWeight(Math.round((data.weight * 0.220462)));
                setAbilities(data.abilities);
                return types.length === 2 ? setSecondaryType(types[1].type.name) : null;
            })
            .catch(error => {
                console.log(error);
            })
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then(response => {
                console.log(response.data.flavor_text_entries[0].flavor_text)
                const data = response.data;
                setEntries(data.flavor_text_entries[0].flavor_text)
            })
            .catch(error => {
                console.log(error);
            })
    }, [url, name])


    const addTeamHandler = event => {
        setChosenPokemon(name);
        pokemonTeamMaker(chosenPokemon, imgs, type);
    }

    return(
        <>
            <div className="pokemon-card">
                <div className="pokemon-card-inner">
                    <div className="pokemon-card-front">
                        <div className="image-container">
                            <img src={imgs} alt={name} />
                        </div>
                        <div className="pokemon-data-container">
                            <h3 className="id">#{id}</h3>
                            {name === "mr-mime" ? <h2 className="poke-name">Mr. Mime</h2> : <h2 className="poke-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>}
                            <StyledThemePill type={type} secondaryType={secondaryType}>
                                <div className="type-pill-primary">
                                    <h3 className={type} id="primary-type-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                                </div>
                                <div className="type-pill-secondary">
                                    <h3 className={secondaryType} id="primary-type-title">{secondaryType.charAt(0).toUpperCase() + secondaryType.slice(1)}</h3>
                                </div>
                            </StyledThemePill>
                            <div className="pokemon-team-button">
                                <img src={imgArray[randNum]} alt="pokeball" />
                                <button onClick={addTeamHandler}>Add Pokemon to Team</button>
                                <img src={imgArray[randNum]} alt="pokeball" />
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-card-back">
                        <div className="pokemon-stats-back">
                            {height < 24 ? <h3> {height} in </h3> : <h3> {heightInFeet} ft</h3>}
                            <h3>{weight} lbs.</h3>
                        </div>
                        <div className="pokemon-ability-back">
                            {abilities.map(ability => {
                                return <h3>{ability.ability.name}</h3>
                            })}
                        </div>
                        <div className="pokemon-entry-back">
                            <p>{entries}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default connect(null, { pokemonTeamMaker })(Pokemon);