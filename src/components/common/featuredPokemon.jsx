import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions/";
import { StyledFeaturedPokemon } from "../../styles/StyledComponents/styledCommon";

const FeaturedPokemon = props => {
    const { setFeaturedPokemon, featuredPokemon } = props;

    useEffect(() => {
        setFeaturedPokemon();
    }, [setFeaturedPokemon]);

    return (
        <div>
            <StyledFeaturedPokemon>
                <img src={""} alt="featured pokemon" className="featured-pokemon-img" />
            </StyledFeaturedPokemon>
        </div>
    )
}


export default connect(
    state => ({
        featuredPokemon: state.featuredPokemon
    }), { 
        setFeaturedPokemon: pokemon.setFeaturedPokemon 
    })(FeaturedPokemon);