import React from "react";

const Pokemon = props => {
    const { name } = props;

    return(
        <div className="pokemon-card">
            <img src="" alt="" />
            <h2>{name}</h2>
            <h3>Type</h3>
            <h3>Number</h3>
        </div>
    )
}

export default Pokemon;