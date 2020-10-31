import axios from "axios";
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { pokemonTeamMaker } from "../store/actions";
// import "../css/styles.css";
import { StyledThemePill as TypePills } from "../StyledComponents/TypePills";
import { StyledCard } from "../StyledComponents/StyledCard";






const Pokemon = props => {
    const { id, name, type1, type2, imgURL, height, weight, entry, habitat, legendary, mythical, ancient } = props;

    return(
        <section className="pokemon-cards">  
            <StyledCard>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <h3>Front Side</h3>
                        </div>
                        <div className="card-back">
                            <h3>Back Side</h3>
                        </div>
                    </div>
                </div>
            </StyledCard>










        {/*
            <div className="pokemon-card">
                <div className="pokemon-card-inner">
                    <div className="pokemon-card-front">
                        <div className="image-container">
                            <img src={imgURL} alt={name} />
                        </div>
                        <div className="pokemon-data-container">
                            <h3 className="id">#{id}</h3>
                            <h3>{name}</h3>
                            <TypePills type={type1} secondaryType={type2}>
                                <div className="type-pill-primary">
                                    <h3 className={type1} id="primary-type-title">{type1}</h3>
                                </div>
                                <div className="type-pill-secondary">
                                    <h3 className={type2} id="primary-type-title">{type2}</h3>
                                </div>
                            </TypePills>
                            <div className="pokemon-team-button">
                                <button onClick={addPokemonHandler}>Flip Card</button>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-card-back">
                        <div className="pokemon-stats-back">
                            <h4>Height: {height * 10} cm </h4>
                            <h4>Weight: {weight * 0.1} kg </h4>
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
        */}
        </section>
    )
}

export default Pokemon;