import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setFeaturedPokemon } from "../../store/actions/actions";
import { StyledFeaturedPokemon } from "../../styles/StyledComponents/styledCommon";

const FeaturedPokemon = props => {
    const { setFeaturedPokemon, featuredPokemon } = props;

    useEffect(()=>{
        setFeaturedPokemon();
    }, [setFeaturedPokemon]);

    return (
        <div>
            <StyledFeaturedPokemon>
                <img src={featuredPokemon} alt="featured pokemon" className="featured-pokemon-img" />
            </StyledFeaturedPokemon>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        featuredPokemon: state.featuredPokemon
    }
}

export default connect(mapStateToProps, { setFeaturedPokemon })(FeaturedPokemon);