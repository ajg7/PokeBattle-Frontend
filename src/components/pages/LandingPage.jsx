import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/StyledComponents/styledpages/StyledLandingPage";
import { StyledBar } from "../../styles/StyledComponents/styledpages/StyledBar";
import { BattleManager } from "../../classes/BattleManager";

const LandingPage = props => {

    const { fetchPokemon, pokemonData } = props;
    const history = useHistory();
    
    const signupHandler = event => {
        history.push("/signup")
    }

    const loginHandler = event => {
        history.push("/login")
    }

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return(
        <div>
            <nav>PokeApp!</nav>
            <StyledLandingPage>
                
                <h2>Wanna battle with the original 151 Pokemon? Come on in!</h2>
                <button onClick={signupHandler}>Sign Up</button>
                <button onClick={loginHandler}>Login</button>
            </StyledLandingPage>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData
    }
} 

export default connect(mapStateToProps, { fetchPokemon })(LandingPage);