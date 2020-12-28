import React, { useState, useRef, useEffect } from "react";
import { pokemon } from "../../store/actions/";
import { StyledWhosThatPokemon } from "../../styles/StyledComponents/styledPages";
import { FeaturedPokemon, MainHeading, Button } from "../common";
import { connect } from "react-redux";

const WhosThatPokemon = props => {

    const { fetchPokemon, featuredPokemon } = props;
    const [revealed, setRevealed] = useState(false);
    const nameRef = useRef();

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon]);

    const evaluator = event => {
        event.preventDefault();
        const submission = nameRef.current.value.toLowerCase();
        submission === featuredPokemon.name ? console.log("You win") : console.log("you lose");
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
        featuredPokemon: state.featuredPokemon,
    }
}

export default connect(
    state => ({
        featuredPokemon: state.featuredPokemon
}), { 
    fetchPokemon: pokemon.fetchPokemon 
})(WhosThatPokemon);