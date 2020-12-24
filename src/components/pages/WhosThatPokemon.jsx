import React, { useState, useRef, useEffect } from "react";
import { fetchPokemon } from "../../store/actions/actions";
import { StyledWhosThatPokemon } from "../../styles/StyledComponents/styledPages";
import { FeaturedPokemon, MainHeading, Button } from "../common";
import { connect } from "react-redux";

const WhosThatPokemon = props => {

    const { fetchPokemon, pokemonData, featuredPokemon } = props;
    const [revealed, setRevealed] = useState(false);
    const nameRef = useRef();

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon]);

    const evaluator = event => {
        event.preventDefault();
        const submission = nameRef.current.value.toLowerCase();
        const filterResult = pokemonData.filter(pokemon => submission === pokemon.name);
        // Bug- If a name is misspelled, the render crashes because the filterResult[0].imgURL is undefined
        if (filterResult[0].imgURL === featuredPokemon.imgURL) {
            console.log("Won!")
        } else {
            console.log("Lost!")
        }
        setRevealed(true);
    }

    const newPokemon = event => window.location.reload();

    return (
        <StyledWhosThatPokemon revealed={revealed}>
            <MainHeading 
            text={"Who's That Pokemon?"}
            classType="whos-that-pokemon-header"
            />
            <FeaturedPokemon />
            <h4>{featuredPokemon.entry}</h4>
            <form onSubmit={evaluator}>
                <label>
                    <input 
                    placeholder="Enter Name of Pokemon"
                    type="text"
                    ref={nameRef}
                    />
                </label>
                <Button 
                isDisabled={false}
                classType={"whos-that-pokemon-submit-button"}
                buttonText={"Submit"}
                />
            </form>
            <Button 
            handleClick={newPokemon}
            isDisabled={false}
            classType={"resetButton"}
            buttonText={"Again?"}
            />
        </StyledWhosThatPokemon>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        featuredPokemon: state.featuredPokemon
    }
}

export default connect(mapStateToProps, { fetchPokemon })(WhosThatPokemon);