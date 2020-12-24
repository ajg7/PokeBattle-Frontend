import React, { useRef, useEffect } from "react";
import { fetchPokemon } from "../../store/actions/actions";
import { StyledWhosThatPokemon } from "../../styles/StyledComponents/styledPages";
import { FeaturedPokemon, MainHeading, Button } from "../common";
import { connect } from "react-redux";

const WhosThatPokemon = props => {

    const { fetchPokemon, pokemonData } = props;
    const nameRef = useRef();

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return (
        <StyledWhosThatPokemon>
            <MainHeading 
            text={"Who's That Pokemon!"}
            classType="whos-that-pokemon-header"
            />
            <FeaturedPokemon 
            />
            <form>
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
        </StyledWhosThatPokemon>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
}

export default connect(mapStateToProps, { fetchPokemon })(WhosThatPokemon);