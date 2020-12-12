import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../../store/actions/actions"
import { useHistory } from "react-router-dom";
import { StyledLandingPage } from "../../styles/StyledComponents/styledPages";
import { Button } from "../common";
import pokeBall from "../../assets/Poke_Ball.png";

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
                <Button 
                handleClick={loginHandler}
                isDisabled={false}
                classType="login-button"
                img={pokeBall}
                alt="pokeball"
                buttonText={"Login"}
                />
                <Button 
                handleClick={loginHandler}
                isDisabled={false}
                classType="signup-button"
                img={pokeBall}
                alt="pokeball"
                buttonText={"Signup"}
                />
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