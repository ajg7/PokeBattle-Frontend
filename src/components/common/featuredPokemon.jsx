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
                <img src={featuredPokemon.imgURL} alt={featuredPokemon.name} className="featured-pokemon-img" />
            </StyledFeaturedPokemon>
        </div>
    )
}


export default connect(
    state => ({
        featuredPokemon: state.pokemon.featuredPokemon
    }), 
    { 
        setFeaturedPokemon: pokemon.setFeaturedPokemon 
    })(FeaturedPokemon);