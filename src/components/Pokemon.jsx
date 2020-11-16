import React, { useState } from "react";
import { connect } from "react-redux";
import { setSelectedPokemon, setIsAdding } from "../store/actions/actions";
import { StyledThemePill as TypePills } from "../StyledComponents/TypePills";
import { CardFlipAnim as CardFlip } from "../StyledComponents/CardFlipAnim";


const Pokemon = props => {
    const { id, name, number, type1, type2, imgURL, height, weight, 
            entry, habitat, legendary, mythical, ancient, setSelectedPokemon, setIsAdding } = props;
    const [flipped, setFlipped] = useState(false);

    const flipHandler = event => !flipped ? setFlipped(true) : setFlipped(false);
    
    const mouseLeaveHandler = event => flipped ? setFlipped(false) : null;

    const dragStart = event =>{ 
        setIsAdding(true, false);
        setSelectedPokemon({id: id, name: name, img: imgURL, number: number});
    }

    return(
        <>
            <CardFlip onClick={flipHandler}>
                <div className={flipped ? "card flipped" : "card"} onMouseLeave={mouseLeaveHandler}>
                    <div className="card-inner">
                        <section className="card-front">
                            <div className="image-container" onDragStart={dragStart}>
                                <img src={imgURL} alt={name} value={id} />
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
                            </div>
                        </section>
                        <section className="card-back">
                            <div className="pokemon-card-back">
                            <div className="pokemon-stats-back">
                                <h4>Height: {Math.round(height * 10)} cm </h4>
                                <h4>Weight: {Math.round(weight * 0.1)} kg </h4>
                                <h4 className="habitat">Habitat: {habitat}</h4>
                                {legendary ? <h4>Legendary</h4> : null}
                                {mythical ? <h4>Mythical</h4> : null}
                                {ancient ? <h4>Ancient</h4> : null}
                            </div>
                            <div className="pokemon-entry-back">
                                <p>{entry}</p>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </CardFlip>
        </>
    )
}

export default connect(null, { setSelectedPokemon, setIsAdding })(Pokemon);