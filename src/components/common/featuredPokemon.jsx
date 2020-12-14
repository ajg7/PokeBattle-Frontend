import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setFeaturedPokemon } from "../../store/actions/actions";

const FeaturedPokemon = props => {
    const { setFeaturedPokemon, featuredPokemon } = props;

    useEffect(()=>{
        setFeaturedPokemon();
    }, [setFeaturedPokemon]);

    return (
        <div>
            <img src={featuredPokemon} alt="featured pokemon" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        featuredPokemon: state.featuredPokemon
    }
}

export default connect(mapStateToProps, { setFeaturedPokemon })(FeaturedPokemon);