import axios from "axios";
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { pokemonTeamMaker } from "../store/actions";
import "../css/reset.css"
import "../css/styles.css";
// import Pokeball from "../assets/Pokeball.png";
// import Greatball from "../assets/Greatball.png";
// import Ultraball from "../assets/Ultraball.png";
// import Masterball from "../assets/Masterball.png";
// import styled from "styled-components";




// const StyledThemePill = styled.div`

//     .type-pill-primary {
//         background-color: ${({ theme, type }) => {
//             return theme.types[type];
//         }};
//         border-radius: 5px;
//     }
//     .type-pill-secondary {
//         background-color: ${({ theme, secondaryType }) => {
//             return theme.types[secondaryType];
//         }};
//         border-radius: 5px;
//     }
// `

const Pokemon = props => {
    const { name, type1, type2, imgURL, number, height, weight, entry, habitat, legendary, mythical, ancient } = props;

    return(
        <>
            <div className="pokemon-card">
                <div className="pokemon-card-inner">
                    <div className="pokemon-card-front">
                        <div className="image-container">
                            <img src={imgURL} alt={name} />
                        </div>
                        <div className="pokemon-data-container">
                            <h3 className="id">#{number}</h3>
                            <h3>{name}</h3>
                            {/*<StyledThemePill type={type1} secondaryType={type2}>*/}
                                <div className="type-pill-primary">
                                    <h3 className={type1} id="primary-type-title">{type1}</h3>
                                </div>
                                <div className="type-pill-secondary">
                                    <h3 className={type2} id="primary-type-title">{type2}</h3>
                                </div>
                            {/*</StyledThemePill>*/}
                            <div className="pokemon-team-button">
                                <button>Add Pokemon to Team</button>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-card-back">
                        <div className="pokemon-stats-back">
                            <h4>Height: {height} </h4>
                            <h4>Weight: {weight} </h4>
                            <h4 className="habitat">Habitat: {habitat}</h4>
                            {legendary ? <h4>Legendary</h4> : null}
                            {mythical ? <h4>Mythical</h4> : null}
                            {ancient ? <h4>Ancient</h4> : null}
                        </div>
                        <div className="pokemon-entry-back">
                            <p>{entry}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon;