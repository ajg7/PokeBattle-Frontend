import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages/StyledLandingPage";

const LandingPage = props => {

    const { fetchPokemon } = props;
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